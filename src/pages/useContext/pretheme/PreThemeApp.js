import React, { useState } from "react";
import PreFunctionConsumer from "./PreFunctionConsumer";
import PreClassConsumer from "./PreClassConsumer";
import classes from "../../../pages/Generic.module.css";

export const PreThemeContext = React.createContext();

function PreThemeApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <PreThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={classes.flexbox}>
        <PreFunctionConsumer />
        <PreClassConsumer />
      </div>
    </PreThemeContext.Provider>
  );
}

export default PreThemeApp;
