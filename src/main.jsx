import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { StateContextProvider } from './context';
import App from './App';
import './styles/globals.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </React.StrictMode>
);
