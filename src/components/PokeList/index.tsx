import React, { useEffect, useState } from 'react'
import api from '../../pages/api'
import { pokemonType } from '../../types/pokemonType'
import {PokeCard} from '../PokeCard/index'

export function PokeList(){
  const [pokemons, setPokemons] = useState<pokemonType[]>([] as pokemonType[])
  const [removedPokemons, setRemovedPokemons] = useState<string[]>([])

  const fetchPokemon = async () => {
    const result = await api.get('pokemon/')
    setPokemons(result.data.results)

    if(!localStorage.getItem("removedPokemons")){
      localStorage.setItem("removedPokemons", "[]")
      setRemovedPokemons([])
    }else{
      setRemovedPokemons(JSON.parse(localStorage.getItem("removedPokemons") as string))
    }
  }

  const removePokemon = (name: string) => {
    removedPokemons.push(name);
    localStorage.setItem("removedPokemons", JSON.stringify(removedPokemons));
    setRemovedPokemons(pokemons);
  }

  useEffect(() => {fetchPokemon()}, [removePokemon])

  return(
    <>
      {
        pokemons.map((pokemon) => {
        return(
          !removedPokemons.some(removedPokemon => removedPokemon === pokemon.name) &&
          <PokeCard pokemon={pokemon} deleteItem = {e => removePokemon(e)}/>
        )})
      }
    </>
  )
}