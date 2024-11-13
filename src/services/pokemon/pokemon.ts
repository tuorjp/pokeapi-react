import axios from "axios"
import api from "../index"
import { MultiPokemonResponseType, Pokemon, PokemonWithSprites, PokemonDetailsType } from "./@types"

export async function getPokemon(): Promise<Pokemon[] | null> {
  try {
    const response = await api.get<{ results: MultiPokemonResponseType }>("pokemon")
    if (response?.data?.results) {
      const pokemonArray: MultiPokemonResponseType = response.data.results

      if (pokemonArray != null && pokemonArray != undefined) {
        const pokemonDetailed: Pokemon[] = await Promise.all(
          pokemonArray.map(
            async (pokemon) => {
              const details = await axios.get<PokemonWithSprites>(pokemon.url)

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

export async function getPokemonDetails(name: string | undefined): Promise<PokemonDetailsType | null> {
  try {
    if (!!name) {
      const detailsResponse = await api.get<PokemonDetailsType>(`pokemon/${name}`)
      const pokemonDetails = detailsResponse.data
      console.log(pokemonDetails)
      return pokemonDetails
    }
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}