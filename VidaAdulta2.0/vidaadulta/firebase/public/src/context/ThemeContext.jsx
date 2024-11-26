// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Criar o contexto do tema
const ThemeContext = createContext();

// Provedor do contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado do tema

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); // Alterna entre os temas
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acessar o contexto do tema
export const useTheme = () => useContext(ThemeContext);
