import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
