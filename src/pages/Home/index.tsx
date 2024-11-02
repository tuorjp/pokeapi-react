import { Pokemon } from "../../services/pokemon/pokemon"
import { Box, Grid } from "@mui/material"
import { CardComponent } from "../../components/CardComponent"
import { usePokemonQuery } from "../../services/pokemon/hooks/usePokemonQuery";
import { usePokemonDetailsQuery } from "../../services/pokemon/hooks/usePokemonDetailsQuery";

export default function Home() {
  const { data: pokemonData } = usePokemonQuery();
  
  const { data: PokemonDetailedData } = usePokemonDetailsQuery(pokemonData);

  console.log(!!PokemonDetailedData && PokemonDetailedData[0]);
  
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Box sx={{display: "flex", width: "100%", px: 2, py: 2, flexDirection: "row", justifyContent: "center"}}>
        <Box component={"h2"} fontWeight={400}>Click the cards to see more details!</Box>
      </Box>

      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Grid container spacing={2}>
          { PokemonDetailedData && PokemonDetailedData.map((pokemon: Pokemon, i: number) => {
            return(
              <Grid item xs={12} md={4} key={i}> 
                <CardComponent title={pokemon.name} image={pokemon.image}/>
              </Grid>
            )
          }) }
        </Grid>
      </Box>
    </Box>
  )
}