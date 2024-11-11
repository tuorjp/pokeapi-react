import { useParams } from "react-router-dom"

export default function DetailedPokemonPage() {
    const { id: pokemonName } = useParams()

    return (
        <>Teste { pokemonName }</>
    )
}