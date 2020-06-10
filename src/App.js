import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Home</p>
      <div id="iframe-container">
        <iframe title="Integration" id="iframe-integration" src="http://localhost:3001" width="95%" height="800px"></iframe>
      </div>

    </div>
  );
}

export default App;
