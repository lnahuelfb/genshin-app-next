import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Characters } from '../../interfaces/characters'

import styles from '/styles/Home.module.css'
import CharacterCard from '../../components/characterCard'
import Loading from '../../components/loading'
import { useRouter } from "next/router";

const character = () => {
  const router = useRouter()
  const character = router.query.character

  const [Data, setData] = useState<Characters>()
  const [loading, setLoading] = useState<boolean>(false)

  console.log(character)

  const fetchData = async (character: string | string[] | undefined) => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/characters/${character}`)
      setData(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!character) return;
    fetchData(character)
  }, [character])

  if (!character || !Data || loading) return <Loading />

  return (
    <div className={styles.container}>
      <Head>
        <title>Genshin App - {Data.name}</title>
        <meta name="description" content="Aplicación de Genshin Impact" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main} style={{
        backgroundImage: `url(https://api.ambr.top/assets/UI/${Data?.images.namegachasplash}.png)`
      }}>
        {Data && <CharacterCard data={Data} />}
      </main>

    </div>
  )
}

export default character
