import styles from './MainLayout.Module.css';
import Head from 'next/head';

import NavBar from '../NavBar';



export const MainLayout = ({ children }) => {
    
    return (
        <div className={styles.container}>
            <Head> {/* Componente --> Head, modifica el <head></head> HTML */}
                <title>Home - Nicolas</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Head> {/* Componente --> Head, modifica el <head></head> HTML */}
                <meta name='keywords' content='nicolas, huerta, curso, next-js' />
            </Head> { /* Este head, sobreescribe el primero */ }
        
            <NavBar />
        
            <main className={styles.main}>

                { children }

            </main>
    
        </div>
      )
}
