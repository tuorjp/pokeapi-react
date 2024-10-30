import { useQuery } from "@tanstack/react-query"
import { getPokemon } from "../pokemon"

export function usePokemonQuery() {
    return useQuery({
        queryKey: ["pokemonSimple"],
        queryFn: getPokemon,
    })
}