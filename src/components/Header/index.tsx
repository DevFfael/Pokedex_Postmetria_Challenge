import { Button, Flex, Image } from "@chakra-ui/react";
import ImgLogo from '../../../public/Logo.png'
import React from "react";

export function Header(){

  function RedefinirLista(){
    localStorage.setItem("removedPokemons", "[]")
  }

  return(
    <Flex px='60px' py='80px' justifyContent='space-between' alignItems='center'>
      <Image src={ImgLogo.src} w='200px'/>
      <Button onClick={RedefinirLista} colorScheme='teal' size='md'>Redefinir Lista</Button>
    </Flex>
  )
}