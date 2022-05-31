import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <Head>
        <title>College Connect</title>
        <meta name="description" content="See what connect can do through you" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <LoginForm />
    </div>
  )
}
