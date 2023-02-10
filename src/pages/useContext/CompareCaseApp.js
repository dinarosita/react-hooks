import React, { useState } from "react";
import classes from "../../styles/Global.module.css";
import CompareCaseClassConsumer from "./CompareCaseClassConsumer";
import CompareCaseFunctionConsumer from "./CompareCaseFunctionConsumer";

export const CompareCaseThemeContext = React.createContext();

export default function CompareCaseApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <div className={classes.scriptrun}>
      <CompareCaseThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme} style={{ width: "fit-content" }}>
          Toggle Theme
        </button>
        <div className={classes.horizontalFlex}>
          <CompareCaseFunctionConsumer />
          <CompareCaseClassConsumer />
        </div>
      </CompareCaseThemeContext.Provider>
    </div>
  );
}
