import React, { useState, useContext } from "react";

const SimplifyThemeContext = React.createContext();
const SimplifyThemeUpdateContext = React.createContext();

export function SimplifyTheme() {
  return useContext(SimplifyThemeContext);
}

export function SimplifyThemeUpdate() {
  return useContext(SimplifyThemeUpdateContext);
}

export function SimplifyThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <SimplifyThemeContext.Provider value={darkTheme}>
      <SimplifyThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </SimplifyThemeUpdateContext.Provider>
    </SimplifyThemeContext.Provider>
  );
}
