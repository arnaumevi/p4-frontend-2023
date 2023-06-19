import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetail";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </Router>
  );
}

export default App;
