import api from "../index"

export type MultiPokemonResponseType = SinglePokemonResponseType[]

export type SinglePokemonResponseType = {
  name: string,
  url: string
}

export default async function getPokemon(): Promise<MultiPokemonResponseType | null> {
  try {
    const response = await api.get('pokemon')
    if(response?.data?.results) {
      return response.data.results
    }
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}