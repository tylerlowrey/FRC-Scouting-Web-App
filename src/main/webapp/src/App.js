import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import Dashboard from "./Dashboard";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
