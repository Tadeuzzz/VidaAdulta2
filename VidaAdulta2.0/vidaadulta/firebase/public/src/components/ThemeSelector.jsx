// src/components/ThemeSelector.js
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeSelector = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeSelector;
