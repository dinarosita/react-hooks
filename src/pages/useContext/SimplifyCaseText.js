import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function SimplifyCaseText() {
  const title1 = "Before simplifying";
  const title1a = "CompareCaseApp.js";
  const text1a = String.raw`export const ThemeContext = React.createContext();

export default function CompareCaseApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <FunctionConsumer />
    </ThemeContext.Provider>
  );
}`;

  const title1b = "FunctionConsumer.js";
  const text1b = String.raw`import { ThemeContext } from "./CompareCaseApp";
  
export default function FunctionConsumer() {
  const dark = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
  };

  return (
    <div style={themeStyles}>
      Function Consumer
    </div>;
  )
}`;

  const title2 = "Simplified";
  const title2a = "SimplifyCaseApp.js";
  const text2a = String.raw`import { ThemeProvider } from "./ThemeContext";
  
export default function SimplifyCaseApp() {
  return (
    <ThemeProvider>
      <SimplifyCaseConsumer />
    </ThemeProvider>
  );
}`;

  const title2b = "ThemeContext.js";
  const text2b = String.raw`import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function Theme() {
  return useContext(ThemeContext);
}

export function ThemeUpdate() {
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

  const title2c = "Consumer.js";
  const text2c = String.raw`import { Theme, ThemeUpdate } from "./ThemeContext";

export default function SimplifyCaseConsumer() {
  const dark = Theme();
  const toggleTheme = ThemeUpdate();
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div style={themeStyles}> Function Consumer</div>
    </div>
  );
}`;
  return (
    <div className={classes.hFlex}>
      <div className={classes.vFlex}>
        <pre className={classes.verticalTitle}>{title1}</pre>
        <div className={classes.codeBox}>
          <pre>{title1a}</pre>
          <pre>{text1a}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title1b}</pre>
          <pre>{text1b}</pre>
        </div>
      </div>

      <div className={classes.vFlex}>
        <pre className={classes.verticalTitle}>{title2}</pre>
        <div className={classes.codeBox}>
          <pre>{title2a}</pre>
          <pre>{text2a}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title2b}</pre>
          <pre>{text2b}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title2c}</pre>
          <pre>{text2c}</pre>
        </div>
      </div>
    </div>
  );
}
