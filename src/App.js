import React from 'react';
import { Link, 
    Switch, 
    Router } from "react-router-dom";
import './App.css';
import Home from './Views/Home';
import Game from './Views/Game';

function App() {
  return (
    <div className="text-center AppCss">
      <Home />
      <Game />
    </div>
  );
}

export default App;
