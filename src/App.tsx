import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as config from './config';

function App() {
  console.log("YELP_API_BASE_URL: ", config.YELP_API_BASE_URL);
  console.log("YELP_BEARER_TOKEN: ", config.YELP_BEARER_TOKEN);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
