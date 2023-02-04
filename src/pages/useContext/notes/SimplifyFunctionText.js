import React from "react";
import classes from "../../../layout/Page.module.css";

function SimplifyFunctionText() {
  const title1 = "Before"
  const title1a = "PrethemeApp.js";
  const text1a = String.raw`
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
      <div>
        <PreFunctionConsumer />
        <PreClassConsumer />
      </div>
    </PreThemeContext.Provider>
  );
}

export default PreThemeApp;
`;

  const title1b = "PreFunctionConsumer.js";
  const text1b = String.raw`
import React, { useContext } from "react";
import { PreThemeContext } from "./PreThemeApp";

function PreFunctionConsumer() {
const dark = useContext(PreThemeContext);
const themeStyles = {
  backgroundColor: dark ? "gray" : "white",
  color: dark ? "white" : "gray",
};

return (
  <div style={themeStyles}>
    Pre Function Consume
  </div>
)
}

export default PreFunctionConsumer;
`;

  const title2 = "After"
  const title2a = "ThemeApp.js";
  const text2a = String.raw`
import React from "react";
import FunctionConsumer from "./FunctionConsumer";
import { ThemeProvider } from "./ThemeContext";

function ThemeApp() {
  return (
    <ThemeProvider>
      <FunctionConsumer />
    </ThemeProvider>
  );
}

export default ThemeApp;
`;

  const title2b = "ThemeContext.js";
  const text2b = String.raw`
import React, { useState, useContext } from "react";
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
`;

  const title2c = "FunctionCustomer.js";
  const text2c = String.raw`
import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionConsumer() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}> Function Consumer</div>
    </>
  );
}

export default FunctionConsumer;
`;
  return (
    <div className={classes.flexbox}>
        
      <div>
      <h3>{title1}</h3>
        <div className={classes.borderedbox}>
          <h4>{title1a}</h4>
          <pre>{text1a}</pre>
        </div>
        <div className={classes.borderedbox}>
          <h4>{title1b}</h4>
          <pre>{text1b}</pre>
        </div>
      </div>
      <div>
        <h3>{title2}</h3>
        <div className={classes.borderedbox}>
          <h4>{title2a}</h4>
          <pre>{text2a}</pre>
        </div>
        <div className={classes.borderedbox}>
          <h4>{title2b}</h4>
          <pre>{text2b}</pre>
        </div>
        <div className={classes.borderedbox}>
          <h4>{title2c}</h4>
          <pre>{text2c}</pre>
        </div>
      </div>
    </div>
  );
}

export default SimplifyFunctionText;
