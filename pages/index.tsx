import type {NextPage} from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <Head>
        <title>Food-helper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <h1>
        Food-helper
      </h1>
    </div>
  )
}

export default Home;