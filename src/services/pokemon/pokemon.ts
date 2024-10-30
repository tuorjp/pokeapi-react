import axios from "axios"
import api from "../index"

export type MultiPokemonResponseType = SinglePokemonResponseType[]

export type SinglePokemonResponseType = {
  name: string,
  url: string
}

export type PokemonDetailsResponse = {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface Pokemon {
  name: string;
  image: string;
}

export async function getPokemon(): Promise<MultiPokemonResponseType | null> {
  try {
    const response = await api.get("pokemon")
    if(response?.data?.results) {
      return response.data.results
    }
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getPokemonDetails(pokemonArray:MultiPokemonResponseType | null |undefined):  Promise<Pokemon[] | null> {
  if(pokemonArray != null && pokemonArray != undefined) {
    const pokemonDetailed: Pokemon[] = await Promise.all(
      pokemonArray.map(
        async(pokemon) => {
          const details = await axios.get<PokemonDetailsResponse>(pokemon.url)
          return {
            name: details.data.name,
            image: details.data.sprites.front_default
          }
        }
      )
    )
  
    return pokemonDetailed;
  }

  return null;
}