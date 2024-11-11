export type MultiPokemonResponseType = SinglePokemonResponseType[]

export type SinglePokemonResponseType = {
  name: string;
  url: string;
}

export type PokemonDetailsResponse = {
  name: string;
  sprites: {
    front_default: string;
  }
}

export interface Pokemon {
  name: string;
  image: string;
}