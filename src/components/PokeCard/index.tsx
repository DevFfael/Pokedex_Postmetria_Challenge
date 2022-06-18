import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import { transform } from "framer-motion";
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from "react";
import api from '../../pages/api'

interface PokeCardProps{
  abilities: Array<any>,
  name: string,
  stats: Array<any>,
  sprites: {
    front_default: string
  },
}

interface PokemonProps{
  pokemon: {
    url: string
  }
}

function DeleteItem(name: string){
  let pokemons = JSON.parse(localStorage.getItem("removedPokemons") as string);
  pokemons.push(name);
  
  localStorage.setItem("removedPokemons", JSON.stringify(pokemons));

  console.log(name)
}

export function PokeCard({pokemon} : PokemonProps){
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [pokemonsInfo, setPokemonsInfo] = useState<PokeCardProps>({} as PokeCardProps)

  const fetchPokemonInfo = async () => {
    const result = await api.get(`${pokemon.url}`)
    console.log(result.data)
    setPokemonsInfo(result.data)
  }

  useEffect(() => {fetchPokemonInfo()}, [])
  
  if(pokemonsInfo)
  return (

    <Box position='relative' 
    borderRadius='20px'
    bg='white'
    p='20px'
    w='15%'
    mr='10px'
    ml='10px'
    minW='250px'
    border='1px solid #e0e0e0'
    transition='transform 200ms ease-in-out, box-shadow 200ms ease-in-out'
    _hover={{ boxShadow:'2xl', transform:'translateY(-5px)' }}
    >
      
      <Button onClick={() => DeleteItem(pokemonsInfo.name)} position='absolute' top='25px' right='25px' bg='none' p='0' m='0' transition='transform 200ms ease-in-out, box-shadow 200ms ease-in-out' zIndex='3' _hover={{transform:'scale(1.3)'}}>        
          <DeleteIcon w='20px' h='20px' color='white'/>
      </Button>

      <Flex
        alignItems='center'
        direction='column'        
        onClick={onOpen}
        >

        <Image src='https://i.ibb.co/xmP2pS6/Profile.png' maxW='100%' borderRadius='10px'/>

        <Flex flexDirection='column' mb='10px' position='relative'>
          <Image
            src={pokemonsInfo.stats && pokemonsInfo.sprites.front_default}
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
              {pokemonsInfo.stats && pokemonsInfo?.stats[0]?.base_stat}
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
              {pokemonsInfo.stats && pokemonsInfo?.stats[1]?.base_stat}
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
              {pokemonsInfo.stats && pokemonsInfo?.stats[2]?.base_stat}
            </Text>
            <Text color='#22c9be' fontWeight='500'>
              DEF
            </Text>
          </Flex>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg='#ededed'>
            <ModalHeader>{pokemonsInfo.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Image
                  src={pokemonsInfo.stats && pokemonsInfo.sprites.front_default}
                  width='200px'
                  height='200px'
                  objectFit='cover'
                />
                <Flex flexDirection='column' w='100%' textAlign='center'>                
                  <Box bg='#d9ab04' w='100%' py='10px' borderRadius='10px 10px 0 0'>
                    <Text color='white' fontSize='1rem' fontWeight='500'>Principais Habilidades</Text>
                  </Box>
                
                  <Flex bg='white' flexDirection='column' h='100%' borderRadius='0 0 10px 10px' alignItems='center' justifyContent='center' fontSize='1.3em' gap='10px'>
                    <Text>
                    {pokemonsInfo.abilities && pokemonsInfo.abilities[0]?.ability.name}
                    </Text>
                    <Text>
                    {pokemonsInfo.abilities && pokemonsInfo.abilities[1]?.ability.name}
                    </Text>
                    <Text>
                    {pokemonsInfo.abilities && pokemonsInfo.abilities[2]?.ability.name}
                    </Text>
                    <Text>
                    {pokemonsInfo.abilities && pokemonsInfo.abilities[3]?.ability.name}
                    </Text>
                  </Flex>
                </Flex>

              </Flex>
              <Flex bg='white' h='70px' mt='15px' justifyContent='center' alignItems='center' borderRadius='md' gap='5rem'>
                <Flex flexDirection='column'>                
                  <Text
                  fontWeight='600'
                  fontSize='xl'
                  color='black'
                  textAlign='center'>
                    {pokemonsInfo.stats && pokemonsInfo?.stats[0]?.base_stat}
                  </Text>
                  <Text color='#2f91e0' fontWeight='500'>
                    HP
                  </Text>
                </Flex>

                <Flex flexDirection='column'>                
                  <Text
                  fontWeight='600'
                  fontSize='xl'
                  color='black'
                  textAlign='center'>
                    {pokemonsInfo.stats && pokemonsInfo?.stats[1]?.base_stat}
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
                    {pokemonsInfo.stats && pokemonsInfo?.stats[2]?.base_stat}
                  </Text>
                  <Text color='#22c9be' fontWeight='500'>
                    DEF
                  </Text>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button bg='#bf2424' color='white' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>  
  );

  return(
    <h1>Recarregue a página!</h1>
  )
}