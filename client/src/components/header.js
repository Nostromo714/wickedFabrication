// src/components/Header.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburgerMenu';
import { useMenu } from '../context/menuContext';
import transparentLogo from '../Images/wickedLogoTransparent.png';

const dropdownItems = {
  services: [
    { to: "/services/service1", label: "Service 1" },
    { to: "/services/service2", label: "Service 2" },
  ],
  portfolio: [
    { to: "/portfolio/signs", label: "SIGNS" },
    { to: "/portfolio/art", label: "ART" },
  ],
  info: [
    { to: "/info/form", label: "INFO" },
    { to: "/faq/form", label: "F.A.Q" },
  ],
};

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
    <header className="flex items-center justify-between p-4 text-white relative z-50">
     
      {/* Logo */}  
      <section className="flex items-center">
    <img src={transparentLogo} alt="Wicked Logo" className="w-48 h-48 object-cover" />
      </section>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
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
          {Object.keys(dropdownItems).map((menuKey) => (
            <li key={menuKey} className="relative">
              <button
                onClick={() => toggleDropdown(menuKey)}
                className="hover:underline"
                aria-haspopup="true"
                aria-expanded={openDropdown === menuKey}
                aria-controls={`${menuKey}-menu`}
              >
                {menuKey.toUpperCase()} ▾
              </button>

              <div ref={dropdownRefs[menuKey]}>
                {openDropdown === menuKey && (
                  <ul
                    id={`${menuKey}-menu`}
                    className={`absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md z-50 ${
    menuKey === "info" ? "right-0" : "left-0"}`}
                    role="menu"
                  >
                    {dropdownItems[menuKey].map(({ to, label }) => (
                      <li key={to} role="none">
                        <Link
                          to={to}
                          role="menuitem"
                          className="block px-2 text-center py-2 hover:bg-gray-200 text-sm"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Menu Content */}
      <HamburgerMenu />
    </header>
  );
};

export default Header;
