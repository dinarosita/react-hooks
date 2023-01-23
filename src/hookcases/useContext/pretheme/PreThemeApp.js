import React, { useState } from "react";
import PreFunctionConsumer from "./PreFunctionConsumer";
import PreClassConsumer from "./PreClassConsumer";

export const PreThemeContext = React.createContext();

function PreThemeApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <PreThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <PreFunctionConsumer />
      <PreClassConsumer />
    </PreThemeContext.Provider>
  );
}

export default PreThemeApp;