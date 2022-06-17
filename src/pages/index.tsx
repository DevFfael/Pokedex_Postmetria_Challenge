import Head from 'next/head'
import { useEffect, useState } from 'react'
import api from './api'
import {PokeTable} from '../components/PokeTable/index'
import { Flex } from '@chakra-ui/react'

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

      <Flex bg='darkgray' justifyContent='center'>
        <PokeTable />
        <PokeTable />
      </Flex>
      
    </div>
  )
}

export default Home
