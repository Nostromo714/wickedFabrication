// src/components/HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../context/menuContext';

const HamburgerMenu = () => {
  const { menuOpen, setMenuOpen } = useMenu();
  const [openDropdown, setOpenDropdown] = useState(null); // Local state for mobile

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Slide-in Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-1/3 max-w-sm bg-white text-black z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:underline">
              ABOUT
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li>
            <button onClick={() => toggleDropdown('services')} className="hover:underline w-full text-left">
              SERVICES ▾
            </button>
            {openDropdown === 'services' && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/services#signs" onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 hover:bg-gray-200 rounded">
                    Signs
                  </Link>
                </li>
                <li>
                  <Link to="/services#design" onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 hover:bg-gray-200 rounded">
                    Design and Art
                  </Link>
                </li>
                 <li>
                  <Link to="/services#metalFab" onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 hover:bg-gray-200 rounded">
                    Metal Fabrications
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* PORTFOLIO DROPDOWN */}
          <li>
            <button onClick={() => toggleDropdown('portfolio')} className="hover:underline w-full text-left">
              PORTFOLIO ▾
            </button>
            {openDropdown === 'portfolio' && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/portfolio/signs" onClick={() => setMenuOpen(false)}>
                    SIGNS
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/art" onClick={() => setMenuOpen(false)}>
                    ART
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* INFO DROPDOWN */}
          <li>
            <button onClick={() => toggleDropdown('info')} className="hover:underline w-full text-left">
              INFO ▾
            </button>
            {openDropdown === 'info' && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/info/form" onClick={() => setMenuOpen(false)}>
                    INFO
                  </Link>
                </li>
                <li>
                  <Link to="/faq/form" onClick={() => setMenuOpen(false)}>
                    F.A.Q
                  </Link>
                </li>
              </ul>
            )}
          </li>
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

export default HamburgerMenu;
