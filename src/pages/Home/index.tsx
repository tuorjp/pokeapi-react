import { useQuery } from "@tanstack/react-query"
import getPokemon from "../../services/pokemon/pokemon"
import { Box } from "@mui/material"

export default function Home() {
  const { data:pokemonData, error:pokemonSearchError } = useQuery({
    queryKey: ['pokemonGeneral'],
    queryFn: getPokemon,
  })

  console.log('@PokemonData', pokemonData)

  return (
    <Box sx={{display: 'flex'}}>
      <p>Home</p>
    </Box>
  )
}