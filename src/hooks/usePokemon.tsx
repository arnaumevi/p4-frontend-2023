import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "../types";

const usePokemon = (pokemonId: number): Pokemon | null => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        setPokemon(response.data);
      });
  }, [pokemonId]);

  return pokemon;
};

export default usePokemon;
