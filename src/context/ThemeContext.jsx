import React, { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Always set to true for dark mode only
  const darkMode = true;
  
  // These functions are kept for API compatibility
  // but they won't actually change the theme
  const setDarkMode = () => {}; 
  const toggleDarkMode = () => {};

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}