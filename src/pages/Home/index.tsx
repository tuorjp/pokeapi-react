import { Pokemon } from "../../services/pokemon/@types"
import { Box, Grid } from "@mui/material"
import { CardComponent } from "../../components/CardComponent"
import { usePokemonQuery } from "../../services/pokemon/hooks/usePokemonQuery"
import { CardComponentLoading } from "../../components/CardComponentLoading"

export default function Home() {
  const { 
    data: pokemonData, 
    isLoading: pokemonDataIsLoading 
  } = usePokemonQuery()

  console.log(pokemonData)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", width: "100%", px: 2, py: 2, flexDirection: "row", justifyContent: "center" }}>
        <Box component={"h2"} fontWeight={400}>Click the cards to see more details!</Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          { !pokemonDataIsLoading && pokemonData && pokemonData.map(
              (pokemon: Pokemon, i: number) => {
                return (
                  <Grid item xs={6} md={3} key={i} sx={{display: "flex", justifyContent: "center"}}>
                    <CardComponent title={pokemon.name} image={pokemon.image} />
                  </Grid>
                )
              }
            )
          }
          {
            pokemonDataIsLoading &&
            <CardComponentLoading />
          }
        </Grid>
      </Box>
    </Box>
  )
}