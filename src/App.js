import React from 'react';
import logo from './logo.svg';
import './App.css';
import randomColor from 'randomcolor';

function App() {
  const randomP = randomColor();

  const mystyle = {
    color: `${randomP}`,
    padding: '10px',
    fontFamily: 'Arial',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={mystyle}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
