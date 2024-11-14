import { Pokemon } from "../../services/pokemon/@types"
import { Box, Button, Grid } from "@mui/material"
import { CardComponent } from "../../components/CardComponent"
import { CardComponentLoading } from "../../components/CardComponentLoading"
import { usePaginatedPokemonQuery } from "../../services/pokemon/hooks/usePaginatedPokemonQuery"
import { CaretLeft, CaretRight } from "phosphor-react"

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
      <Box sx={{ display: "flex", width: "100%", px: 2, py: 2, flexDirection: "row", justifyContent: "center", gap: 4 }}>
        <Box component={"h2"} fontWeight={400} display={"flex"} flexDirection={"row"} justifyContent={"center"}>Click the cards to see more details!</Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            size="small"
            onClick={previousPage}
            disabled={offset == 0}
            endIcon={<CaretLeft size={20} />}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={nextPage}
            disabled={isPlaceholderData}
            endIcon={<CaretRight size={20} />}
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