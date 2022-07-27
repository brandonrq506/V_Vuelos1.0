import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//We musr remove StrictMode as it renders twice at Start.
//But it's useful for debugging messages.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);