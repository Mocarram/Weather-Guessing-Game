import React from "react";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Result from "./components/Result";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/result">
            <Result />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
