import Head from 'next/head'
import { NavBar } from '../../components/NavBar'
import styles from '../../styles/Home.module.css'

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Nicolas</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>

        <h1>Contact Page</h1>
        
        <h1 className={styles.title}>
          Contact
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact/index.js</code>
        </p>
 
      </main>

    </div>
  )
}
