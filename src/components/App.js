import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Welcome from "./welcome/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Welcome />
      </div>
    );
  }
}

export default App;
