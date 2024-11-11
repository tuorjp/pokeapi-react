import axios from "axios"
import api from "../index"
import { MultiPokemonResponseType, Pokemon, PokemonDetailsResponse } from "./@types"

export async function getPokemon(): Promise<Pokemon[] | null> {
  try {
    const response = await api.get<{ results: MultiPokemonResponseType }>("pokemon")
    if(response?.data?.results) {
      const pokemonArray: MultiPokemonResponseType = response.data.results

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
        
        return pokemonDetailed
      }
    }
    
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}