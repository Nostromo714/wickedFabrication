
 import React from 'react';
import { Link } from 'react-router-dom';

const HambergerMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Slide-in menu */}
      <nav className={`fixed top-0 right-0 h-full w-1/3 max-w-sm bg-white text-black z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)} className="hover:underline">Services</Link></li>
          <li><Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:underline">Portfolio</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default HambergerMenu;
