import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import React from "react";

export default function PokemonDetails() {
  const params = useParams();
  const name = params["name"] || "";

  const pokemon = usePokemon(name);

  if (!pokemon) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={`Default ${pokemon.name}`}
      />
      {pokemon.sprites.front_shiny && (
        <img src={pokemon.sprites.front_shiny} alt={`Shiny ${pokemon.name}`} />
      )}
      {pokemon.sprites.other?.official_artwork?.front_default && (
        <img
          src={pokemon.sprites.other.official_artwork.front_default}
          alt={`Artwork ${pokemon.name}`}
        />
      )}
    </div>
  );
}
