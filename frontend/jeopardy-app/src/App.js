import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import MainHome from "./shared/components/Homescreen/MainHome";
import Board from "./Gameboard/components/Board";
import MainNavigation from "./shared/components/UIElements/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <MainHome />
          </Route>
          <Route path='/boards' exact>
            <Board />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
