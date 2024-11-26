// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Criação do Contexto
const ThemeContext = createContext();

// Criando o Provider do contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar o tema

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre claro e escuro
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};
