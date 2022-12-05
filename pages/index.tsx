import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Genshin App</title>
        <meta name="description" content="Aplicación de Genshin Impact" />
        <link rel="icon" href="/icon.png" />
      </Head>


      <main className={styles.main}>
          <h1>Genshin Impact App!</h1>
      </main>

    </div>
  )
}

export default Home