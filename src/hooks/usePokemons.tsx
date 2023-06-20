import React, { useState, useEffect } from "react";
import axios from "axios";
import { PokemonData } from "./../types/index";

function usePokemons() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemons(response.data.results);
      });
  }, []);

  return pokemons;
}

export default usePokemons;
