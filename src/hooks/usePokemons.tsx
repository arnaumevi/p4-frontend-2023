import { useEffect, useState } from "react";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Aquí irá el código para obtener los pokemons de la API
  }, []);

  return pokemons;
}
