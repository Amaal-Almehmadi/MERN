import React from 'react';
import axios from 'axios';
import './App.css';
import Home from './views/Home';
import Details from './views/Details';
import Edit from './views/Edit';
import New from './views/New';
import { Router, Link, navigate } from '@reach/router';
function App() {
  // navigate("/new");
  return (
    <div className="App">

      <div className="container">
        <h1>Pet Shelter</h1>
      </div>

      <Router>
      <Home path="/" />
        <New path="/new" />
        <Edit path="/edit/:id" />
        <Details path="/pets/:id" />
      </Router>
    </div>
  );
}

export default App;
