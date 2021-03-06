import React from "react";
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Home from './Views/Home';
import Game from './Views/Game';

function App() {

  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
        <div className="text-center">
          <Link to="/home" className="linkCss">
            Home
          </Link>
          <Link to="/game" className="linkCss">
            Game
          </Link>
        </div>
      </Router>

    </div>
  );
}

export default App;
