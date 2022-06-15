import Head from 'next/head'
import { useEffect, useState } from 'react'
import api from './api'

const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemon = async () => {
    const result = await api.get('pokemon/')
    console.log(result)
    setPokemons(result.data.results)
  }

  useEffect(() => {fetchPokemon()}, [])

  return (
    <div>
      <Head>
        <title>PokeList</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
