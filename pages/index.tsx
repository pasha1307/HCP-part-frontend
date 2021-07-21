import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from "@material-ui/core";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>HCP - Frontend</title>
                <meta name="description" content="grid with Media oject cards and backend pagination"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <AppBar position="absolute" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Demo Client: ANIME Cards
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={styles.main}>
                <Typography variant="h1" color="inherit" noWrap>
                    Initial view
                </Typography>
            </main>

            <footer className={styles.footer}>
                info in the footer
            </footer>
        </div>
    )
}
