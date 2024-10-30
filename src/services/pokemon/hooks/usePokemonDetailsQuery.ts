import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails, MultiPokemonResponseType } from "../pokemon";

export function usePokemonDetailsQuery(pokemonData: MultiPokemonResponseType | null | undefined) {
    return useQuery({
        queryKey: ["pokemonDetailed"],
        queryFn: () => getPokemonDetails(pokemonData),
        enabled: !!pokemonData
    })
}