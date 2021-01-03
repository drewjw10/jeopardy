import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Board from "./Gameboard/components/Board";
import NewBoard from "./Gameboard/components/NewBoard";
import MainNavigation from "./shared/components/UIElements/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Board />
          </Route>
          <Route path='/boards' exact>
            <NewBoard />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
