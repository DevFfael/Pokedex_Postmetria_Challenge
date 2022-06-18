import Head from 'next/head'
import {PokeList} from '../components/PokeList/index'
import {Header} from '../components/Header/index'
import { Flex, Grid } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Head>
        <title>PokeList</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

        <Flex wrap='wrap' gap='10px' justifyContent='center' mx='300px'>
          <PokeList />
        </Flex>
      
    </div>
  )
}

export default Home
