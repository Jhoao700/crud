import React from 'react';
import ReactDOM from 'react-dom/client'; // Nota: Usa react-dom/client en lugar de react-dom
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
