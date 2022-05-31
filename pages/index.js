import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>College Connect</title>
        <meta name="description" content="See what connect can do through you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.graybg}>
        <div className={styles.cardboxcontainer}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
