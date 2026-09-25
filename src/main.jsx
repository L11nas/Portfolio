import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/manrope';
import App from './App.jsx';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Produkcijoje HTML jau sugeneruotas iš anksto – jį „atgaiviname“, o ne piešiame iš naujo
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
