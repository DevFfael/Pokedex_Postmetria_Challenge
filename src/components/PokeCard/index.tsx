import { Flex, Image, Text} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import api from '../../pages/api'

export function PokeCard({pokemon}){

  const [pokemonsInfo, setPokemonsInfo] = useState({})

  const fetchPokemonInfo = async () => {
    const result = await api.get(`${pokemon.url}`)
    console.log(result.data)
    setPokemonsInfo(result.data)
  }

  useEffect(() => {fetchPokemonInfo()}, [])

  return (
    <Flex
      borderRadius='20px'
      bg='white'
      p='20px'
      w='15%'
      mr='10px'
      ml='10px'
      minW='250px'
      alignItems='center'
      direction='column'
      border='1px solid #e0e0e0'
      transition='transform 200ms ease-in-out, box-shadow 200ms ease-in-out'
      _hover={{ boxShadow:'2xl', transform:'translateY(-5px)' }}
      >

      <Image src='https://i.ibb.co/xmP2pS6/Profile.png' maxW='100%' borderRadius='10px' />

      <Flex flexDirection='column' mb='10px'>
        <Image
          src={pokemonsInfo.sprites.front_default}
          mx='auto'
          width='100%'
          mt='-58px'
        />
        <Text
          fontWeight='600'
          textAlign='center'
          fontSize='xl'>
          {pokemonsInfo.name}
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='16px'>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            fontSize='xl'
            color='black'
            textAlign='center'>
            {pokemonsInfo.stats[0].base_stat}
          </Text>
          <Text color='#2f91e0' fontWeight='500'>
            HP
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color='black'
            fontSize='xl'
            textAlign='center'
            >
            {pokemonsInfo.stats[1].base_stat}
          </Text>
          <Text color='#db0909' fontWeight='500'>
            ATK
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            fontSize='xl'
            color='black'
            textAlign='center'>
            {pokemonsInfo.stats[2].base_stat}
          </Text>
          <Text color='#22c9be' fontWeight='500'>
            DEF
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}