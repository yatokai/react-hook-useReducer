import React from 'react';
import logo from './logo.svg';
import './App.css';

import SelfCounter from './components/SelfCounter';
import CustomHook from './components/CustomHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <hr />

      <h1>Custom Hook</h1>
      <CustomHook />
      <hr />

      <h1>useReducer, useMemo, useCallback</h1>
      <SelfCounter />
    </div>
  );
}

export default App;
