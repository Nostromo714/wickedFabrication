import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'; // or './App.css' depending on your file

import HomePage from './pages/home';

// import '.pages/about.js';
// import './pages/services.js';
// import './pages/portfolio.js';
// import './pages/contact.js';
// import './pages/faq.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  )
}

export default App;

