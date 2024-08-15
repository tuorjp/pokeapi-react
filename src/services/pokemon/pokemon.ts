import api from "../index"

export default async function getPokemon() {
  try {
    const response = await api.get('pokemon')
    if(response?.data?.results) {
      return response.data.results
    }
  } catch (error) {
    console.error(error)
    return null
  }
}