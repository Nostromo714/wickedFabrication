// src/components/Header.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburgerMenu';
import { useMenu } from '../context/menuContext';

const Header = () => {
  const { menuOpen, setMenuOpen, openDropdown, setOpenDropdown } = useMenu();

  const dropdownRefs = {
    services: useRef(null),
    portfolio: useRef(null),
    info: useRef(null),
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = Object.values(dropdownRefs).every((ref) => {
        return !(ref.current && ref.current.contains(event.target));
      });

      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 text-white relative z-50">
      <h1 className="text-lg font-bold">Wicked Fabrication</h1>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">HOME</Link></li>
          <li><Link to="/about" className="hover:underline">ABOUT</Link></li>

          {/* Dropdowns */}
          {['services', 'portfolio', 'info'].map((item) => (
            <li key={item} className="relative" ref={dropdownRefs[item]}>
              <button onClick={() => toggleDropdown(item)} className="hover:underline">
                {item.toUpperCase()} ▾
              </button>
              {openDropdown === item && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md">
                  {item === 'services' && (
                    <>
                      <li><Link to="/services/service1" className="block px-4 py-2 hover:bg-gray-200">Service 1</Link></li>
                      <li><Link to="/services/service2" className="block px-4 py-2 hover:bg-gray-200">Service 2</Link></li>
                    </>
                  )}
                  {item === 'portfolio' && (
                    <>
                      <li><Link to="/portfolio/signs" className="block px-4 py-2 hover:bg-gray-200">SIGNS</Link></li>
                      <li><Link to="/portfolio/art" className="block px-4 py-2 hover:bg-gray-200">ART</Link></li>
                    </>
                  )}
                  {item === 'info' && (
                    <>
                      <li><Link to="/info/form" className="block px-4 py-2 hover:bg-gray-200">INFO</Link></li>
                      <li><Link to="/faq/form" className="block px-4 py-2 hover:bg-gray-200">F.A.Q</Link></li>
                    </>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Menu */}
      <HamburgerMenu />
    </div>
  );
};

export default Header;
