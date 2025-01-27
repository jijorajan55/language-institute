import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root element using React 18+ API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using root.render()
root.render(
  <React.StrictMode>
    <App />  {/* Your main app component */}
  </React.StrictMode>
);

reportWebVitals();
