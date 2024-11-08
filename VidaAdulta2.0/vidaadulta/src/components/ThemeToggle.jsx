// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeToggle;
