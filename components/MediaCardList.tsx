import MediaCard from './MediaCard'
import {useEffect, useState} from "react";
import {Pagination} from "@material-ui/lab";
import {animeList} from "../data/graphql/queries";
import styles from '../styles/MediaCardList.module.css';
import Loader from "./Loader";

const MediaCardList = () => {
    const [media, setMedia] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        handleApiData()
    }, [])
    const handleChange = (event: any, value: any) => {
        setIsLoading(true)
        const urlAPI = process.env.apiUrl;
        const q = animeList;
        const variables = varsData(value, 7);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: q,
                variables: variables
            })
        };

        fetch(urlAPI, options)
            .then(handleResponse)
            .then(handleData)
            .catch(handleError);
        setPage(value);
    };
    const handleResponse = (resp: any) => {
        setIsLoading(false)
        return resp.json().then((json: any) => {
            return resp.ok ? json : Promise.reject(json);
        })
    }
    const handleData = (d: any) => {
        const arr = d.data.Page.media;
        const newArr = arr.map((el: any) => {
            return {
                title: el.title.english,
                description: el.description,
                image: el.coverImage.large
            }
        })
        const pageInfo = d.data.Page.pageInfo;
        setMedia(newArr);
        setTotal(pageInfo.lastPage)
        setPage(pageInfo.currentPage)
        console.log('DATA', d);
    }
    const handleError = (err: any) => console.log(err);

    const varsData = (p, count) => {
        return {
            page: p,
            perPage: count
        }
    }

    const handleApiData = () => {
        const urlAPI = process.env.apiUrl;
        const q = animeList;
        const variables = varsData(1, 7);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: q,
                variables: variables
            })
        };

        fetch(urlAPI, options)
            .then(handleResponse)
            .then(handleData)
            .catch(handleError);
    }
    return (
        <>
            {!loading && media && media.length > 0 &&
            <div className={styles.mediaList}>
                {media.map(elm => (
                        <MediaCard
                            key={elm.id}
                            title={elm.title}
                            description={elm.description}
                            image={elm.image}
                        />
                    )
                )}
            </div>
            }
            {!loading && <Pagination count={total} page={page} onChange={handleChange}/>}
            {loading && <Loader/>}

        </>
    )
}
export default MediaCardList