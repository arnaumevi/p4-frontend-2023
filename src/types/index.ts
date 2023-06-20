export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
    front_shiny?: string;
    other?: {
      "official-artwork"?: {
        front_default?: string;
      };
    };
  };
  abilities: PokemonAbility[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}
