import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "./../types/index";

function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Usa la interfaz aquí

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
