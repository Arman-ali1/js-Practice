// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
// import reportWebVitals from './reportWebVitals.js';

import { createRoot } from 'react-dom/client';
import App from './App.js';

// Use createRoot from "react-dom/client" instead of "react-dom"
const root = createRoot(document.getElementById('root'));

// Render your app within the root
root.render(<App />);


