// Header component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburgerMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 text-white relative z-50">
      <h1 className="text-lg font-bold">Wicked Fabrication</h1>

      {/* Hamburger Icon */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menu */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Header;