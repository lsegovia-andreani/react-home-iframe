import React from 'react';
import './App.css';

function App() {
  var iframeUrl = "http://" + window.location.hostname + ":3001/"
  return (
    <div className="App">
      <p>Home</p>
      <div id="iframe-container">
        <iframe title="Integration" id="iframe-integration" src={iframeUrl} width="95%" height="800px"></iframe>
      </div>

    </div>
  );
}

export default App;
