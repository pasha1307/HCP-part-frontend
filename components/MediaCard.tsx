import styles from '../styles/MediaCard.module.css';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
// import { Markup } from 'react-render-markup';
const MediaCard = (props: any) => {
    return (
        <Card className={styles.wrap}>
            <CardActionArea>
                <CardMedia
                    className={styles.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/*<Markup markup={props.description.slice(0,100) + "..."} />*/}
                        {props.description.slice(0,100) + "..."}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/*<CardActions>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Share*/}
            {/*    </Button>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Learn More*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>
    )
}
export default MediaCard