import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePokemons from "../hooks/usePokemons";
import "./PokemonList.css";

export default function PokemonList() {
  const [searchTerm, setSearchTerm] = useState("");
  const pokemons = usePokemons();

  const pokemonItems = pokemons
    .filter((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()))
    .map((pokemon, i) => (
      <div key={i} className="pokemon-list-item">
        <Link to={`/pokemon/${pokemon.name}`}>
          <span>{pokemon.name}</span>
        </Link>
      </div>
    ));

  return (
    <div className="pokemon-list-container">
      <h1 className="pokemon-list-header">Pokemon List</h1>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="Search for Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="pokemon-list">{pokemonItems}</div>
    </div>
  );
}
