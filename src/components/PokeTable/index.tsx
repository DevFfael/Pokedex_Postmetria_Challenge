import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export function PokeTable(){
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Flex
      borderRadius='20px'
      bg='white'
      p='20px'
      w='25%'
      mr='10px'
      ml='10px'
      alignItems='center'
      direction='column'>

      <Image src='https://i.ibb.co/xmP2pS6/Profile.png' maxW='100%' borderRadius='10px' />

      <Flex flexDirection='column' mb='10px'>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
          mx='auto'
          width='60%'
          mt='-58px'
        />
        <Text
          fontWeight='600'
          textAlign='center'
          fontSize='xl'>
          Ditto
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='16px'>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            fontSize='xl'
            color='black'
            textAlign='center'>
            17
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
            9.7k
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
            274
          </Text>
          <Text color='#22c9be' fontWeight='500'>
            DEF
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}