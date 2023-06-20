import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonData } from "../types";

const usePokemon = (pokemonName: string): PokemonData | null => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);
      });
  }, [pokemonName]);

  return pokemon;
};

export default usePokemon;
