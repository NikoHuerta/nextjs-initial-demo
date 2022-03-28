import Head from 'next/head';
import Link from 'next/link';
import { NavBar } from '../components/NavBar';
import styles from '../styles/Home.module.css';

export default function HomePage() {

  const pageName = 'Home Page';

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

        <h1>{ pageName }</h1>        
        <h1 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
 
      </main>

    </div>
  )
}
