import React, { useState } from "react";
import logo from './logo.svg';
import './containers/App.css';
import { Login } from "./containers/Login";
import Navbar from "./containers/Navbar";


function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
};

export default App;