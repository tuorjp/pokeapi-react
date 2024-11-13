import { useParams } from "react-router-dom"
import { usePokemonDetailsQuery } from "../../services/pokemon/hooks/usePokemonDetailsQuery"

export default function DetailedPokemonPage() {
    const { id: pokemonName } = useParams()
    const { data: pokemonDetails, isLoading:isLoadingPokemonDetails } = usePokemonDetailsQuery(pokemonName)

    console.log(pokemonDetails, isLoadingPokemonDetails)
    return (
        <>{pokemonName}</>
    )
}