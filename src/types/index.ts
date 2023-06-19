export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}
export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
    front_shiny?: string;
    other?: {
      official_artwork?: {
        front_default?: string;
      };
    };
  };
}
