import { Pokemon } from "../../services/pokemon/@types"
import { Box, Button, Grid } from "@mui/material"
import { CardComponent } from "../../components/CardComponent"
import { CardComponentLoading } from "../../components/CardComponentLoading"
import { usePaginatedPokemonQuery } from "../../services/pokemon/hooks/usePaginatedPokemonQuery"

export default function Home() {
  const {
    data: pokemonData,
    isLoading: pokemonDataIsLoading,
    isPlaceholderData,
    offset,
    previousPage,
    nextPage
  } = usePaginatedPokemonQuery()

  console.log(pokemonData, pokemonDataIsLoading)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", width: "100%", px: 2, py: 2, flexDirection: "row", justifyContent: "space-between" }}>
        <Box component={"h2"} fontWeight={400}>Click the cards to see more details!</Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            onClick={previousPage}
            disabled={offset == 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={nextPage}
            disabled={isPlaceholderData}
          >
            Next
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {!pokemonDataIsLoading && pokemonData && pokemonData.map(
            (pokemon: Pokemon, i: number) => {
              return (
                <Grid item xs={6} md={3} key={i} sx={{ display: "flex", justifyContent: "center" }}>
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