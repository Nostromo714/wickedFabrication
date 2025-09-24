// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuProvider } from './context/menuContext.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './pages/home';
import AboutPage from './pages/about.js';
import ServicesPage from './pages/services';
import PortfolioPage from './pages/portfolio';
import InfoPage from './pages/info';
import FaqPage from './pages/faq';

function App() {
  return (
    <Router>
       <MenuProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/portfolio/*" element={<PortfolioPage />} />
          <Route path="/info/*" element={<InfoPage />} />
          <Route path="/faq/*" element={<FaqPage />} />
        </Routes>
        </MenuProvider>
    </Router>
  )
}

export default App;

