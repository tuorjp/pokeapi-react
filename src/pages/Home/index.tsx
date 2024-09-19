import { useQuery } from "@tanstack/react-query"
import getPokemon, { SinglePokemonResponseType } from "../../services/pokemon/pokemon"
import { Box, Grid } from "@mui/material"
import { CardComponent } from "../../components/CardComponent"

export default function Home() {
  const { data:pokemonData, error:pokemonSearchError } = useQuery({
    queryKey: ['pokemonGeneral'],
    queryFn: getPokemon,
  })

  console.log('@PokemonData', pokemonData)
  console.log('@PokemonSearchError', pokemonSearchError)

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box sx={{display: 'flex', width: '100%', px: 2, py: 2, flexDirection: 'row', justifyContent: 'center'}}>
        <Box component={'h2'} fontWeight={400}>Click to open a pokemon modal!</Box>
      </Box>

      <Box>
        <Grid container spacing={2}>
          { pokemonData && pokemonData.map((pokemon: SinglePokemonResponseType, i: number) => {
            return(
              <Grid item xs={12} md={4} key={i}> 
                <CardComponent title={pokemon.name}/>
              </Grid>
            )
          }) }
        </Grid>
      </Box>
    </Box>
  )
}