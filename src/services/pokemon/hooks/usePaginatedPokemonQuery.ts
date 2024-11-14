import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getPokemon } from "../pokemon"

export function usePaginatedPokemonQuery() {
    const [offset, setOffset] = useState(0)
    const queryClient = useQueryClient()

    const pokemonQuery = useQuery({
        queryKey: ["pokemonList", offset],
        queryFn: () => getPokemon(offset),
    })

    useEffect(() => {
        const nextOffset = offset + 20
        queryClient.prefetchQuery({
            queryKey: ["pokemonList", nextOffset], 
            queryFn: () => getPokemon(nextOffset)
        })
    }, [offset, queryClient])

    const nextPage = () => setOffset((prevOffset) => prevOffset + 20)
    const previousPage = () => setOffset((prevOffset) => Math.max(prevOffset - 20, 0))

    return {
        ...pokemonQuery,
        offset,
        nextPage,
        previousPage
    }
}