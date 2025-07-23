// src/components/MenuContext.js
// This file creates a context for managing the menu state in the application.
import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // e.g., 'services', 'portfolio', 'contact'

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen, openDropdown, setOpenDropdown }}>
      {children}
    </MenuContext.Provider>
  );
};
