import Head from 'next/head'
import {PokeList} from '../components/PokeList/index'
import {Header} from '../components/Header/index'
import { Flex, Link, Text, Image, background, color, Box } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const Home = () => {
  return (
    <Box bg='#f9f9f9'>
      <Head>
        <title>PokeList</title>
        <meta name="description" content="" />
        <link rel="icon" href="/pokelistIcon.ico" />
      </Head>

      <Header />

      <Flex wrap='wrap' gap='10px' justifyContent='center' ml={[0, 3, 16, 40]}
      mr={[0, 3, 20, 40]}>
        <PokeList />
      </Flex>

      <Flex py='40px' alignItems='center' justifyContent='center'>
        <StarIcon color='#d9ab04'/>
        <Text fontSize='1.2rem' mx='10px'>
          Feito por <Link href='https://github.com/RaffaelOliveira-dev'target="_blank" fontWeight='700'>Raffael</Link>
        </Text>
        <StarIcon color='#d9ab04'/>
      </Flex>
      
    </Box>
  )
}

export default Home
