import React from "react";
import usePokemons from "../hooks/usePokemons";

export default function PokemonList() {
  const pokemons = usePokemons();

  const pokemonItems = pokemons.map((pokemon, i) => (
    <li key={i}>{pokemon.name}</li>
  ));

  return <ul>{pokemonItems}</ul>;
}
