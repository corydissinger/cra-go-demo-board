import React from 'react';
import Board from './Board';
import Configuration from './Configuration';

function App() {
  return (
    <div className="App">
      <Configuration/>
      <Board/>
      <header className="App-header">
        <p>
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
