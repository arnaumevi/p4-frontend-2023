import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import React from "react";
import "./PokemonDetail.css";

export default function PokemonDetails() {
  const params = useParams();
  const name = params["name"] || "";

  const pokemon = usePokemon(name);

  if (!pokemon) {
    return <div className="pokemon-not-found">Pokémon not found</div>;
  }

  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <div
        className="pokemon-images"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="pokemon-image-container">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p className="pokemon-image-text">Normal</p>
        </div>
        <div className="pokemon-image-container">
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <p className="pokemon-image-text">Shiny</p>
        </div>
      </div>

      <div className="pokemon-info">
        <h3>Skills</h3>
        <ul className="pokemon-abilities">
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <h3>Type</h3>
      <div className="pokemon-types">
        {pokemon.types.map((type, index) => (
          <span key={index}>{type.type.name}</span>
        ))}
      </div>
    </div>
  );
}
