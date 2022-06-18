import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export function Header(){
  return(
    <Flex px='60px' h='3rem' my='40px' bg='tomato' justifyContent='center' alignItems='center'>
      <Text>
        Area da Logo
      </Text>
    </Flex>
  )
}