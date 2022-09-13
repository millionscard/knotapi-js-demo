import React from 'react';
import './App.css';
import KnotapiJS from "knotapi-js";

function App() {
  const openCardSwitcher = () => {
    const knotapi = new KnotapiJS();
    knotapi.openCardOnFileSwitcher({sessionId: "e64b25c2-d307-41bf-abc1-d3dd1803e2f2", companyName: "Millions"});
  }
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="App-link"
          onClick={openCardSwitcher}
        >
          Open card switcher
        </div>
      </header>
    </div>
  );
}

export default App;
