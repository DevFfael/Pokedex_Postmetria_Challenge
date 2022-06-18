import React, { useEffect, useState } from 'react'
import api from '../../pages/api'
import {PokeCard} from '../PokeCard/index'
 
export function PokeList(){
  const [pokemons, setPokemons] = useState([])

  const fetchPokemon = async () => {
    const result = await api.get('pokemon/')
    setPokemons(result.data.results)
  }

  useEffect(() => {fetchPokemon()}, [])

  return(
    <>
      {
        pokemons.map((pokemon) => {
        return(
          <PokeCard pokemon={pokemon} />
        )})
      }
    </>
  )
}