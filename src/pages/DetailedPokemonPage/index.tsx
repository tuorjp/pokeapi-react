import { useParams } from "react-router-dom"
import { usePokemonDetailsQuery } from "../../services/pokemon/hooks/usePokemonDetailsQuery"
import { Box, Typography } from "@mui/material"
import { ArrowLeft } from "phosphor-react"

export default function DetailedPokemonPage() {
    const { id: pokemonName } = useParams()
    const { 
        data: pokemonDetails, 
        isLoading:isLoadingPokemonDetails 
    } = usePokemonDetailsQuery(pokemonName)

    console.log(pokemonDetails, isLoadingPokemonDetails)
    return (
        <Box
            sx={{
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",  
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 2
                }}
            >
                <ArrowLeft size={28} />
                <Typography variant="h5">Return</Typography>
            </Box>
            <Box>
                {/* TODO detalhes do pokemon*/}
                
            </Box>
        </Box>
    )
}