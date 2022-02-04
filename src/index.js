import React from 'react';
import ReactDOM from 'react-dom';
import { PokemonProvider } from './Context/PokemonContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
