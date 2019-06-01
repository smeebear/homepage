import React from 'react';
import logo from './chonkers2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        jacob johnson to the principal's office
        </p>
        <a
          className="App-link"
          href="https://teespring.com/chonkest-lad"
          target="_blank"
          rel="noopener noreferrer"
        >
          get it on a hoodie
        </a>
        <p className="orElse">or else</p>
      </header>
    </div>
  );
}

export default App;
