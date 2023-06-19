import React from "react";
import { Link } from "react-router-dom";
import usePokemons from "../hooks/usePokemons";

export default function PokemonList() {
  const pokemons = usePokemons();

  const pokemonItems = pokemons.map((pokemon, i) => (
    <li key={i}>
      <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
    </li>
  ));

  return <ul>{pokemonItems}</ul>;
}
