import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPokemon } from "../pokemon"

export function usePokemonQuery(offset: number) {
    return useQuery({
        queryKey: [`pokemonList${offset}`],
        queryFn: () => getPokemon(offset),
        placeholderData: keepPreviousData
    })
}