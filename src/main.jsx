// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// Render the React app to the root element in the HTML file
const root = createRoot(document.getElementById('root'));
// const rootInstance = createRoot(root);
root.render(<App />);

