import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage/HomePage.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <div className="App">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
