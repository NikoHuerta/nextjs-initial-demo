import { FC } from 'react';
import Head from 'next/head';

import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css'



export const MainLayout: FC = ({ children }) => {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Nicolas</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Head>
                <meta name='keywords' content='nicolas, huerta, curso, next-js' />
            </Head>
        
            <NavBar />
        
            <main className={styles.main}>

                { children }

            </main>
    
        </div>
      )
}
