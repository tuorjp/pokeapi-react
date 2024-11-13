import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../pokemon";

export function usePokemonDetailsQuery(name: string | undefined) {
    return useQuery({
        queryKey: [`${name}Details`],
        queryFn: () => getPokemonDetails(name)
    })
}