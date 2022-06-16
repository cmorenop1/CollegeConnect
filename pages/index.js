import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>myLMS</title>
        <meta name="description" content="See what connect can do through you" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <LoginForm />
      <Footer />
    </div>
  )
}
