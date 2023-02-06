import React from "react";
import classes from "../../layout/Global.module.css"
function FunctionVsClassText() {
  const title1 = "ThemeApp.js";
  const text1 = String.raw`
import React, { useState } from "react";
import PreFunctionConsumer from "./PreFunctionConsumer";
import PreClassConsumer from "./PreClassConsumer";

export const PreThemeContext = React.createContext();

function ThemeApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  } 
  
  return (
    <PreThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <PreFunctionConsumer />
        <PreClassConsumer />
    </PreThemeContext.Provider>
  );
}

export default ThemeApp;   
`;
  const title2 = "PreFunctionConsumer.js";
  const text2 = String.raw`
import React, { useContext } from "react";
import { PreThemeContext } from "./ThemeApp";

function PreFunctionConsumer() {
  const dark = useContext(PreThemeContext);

  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray"
  };

  return (
    <div style={themeStyles}>
        Function Consumer
    </div>;
  )
}

export default PreFunctionConsumer;
`;
  const title3 = "PreClassConsumer.js";
  const text3 = String.raw`
import React, { Component } from "react";
import { PreThemeContext } from "./ThemeApp";

class PreClassConsumer extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "gray" : "white",
      color: dark ? "white" : "gray"
    };
  }

  render() {
    return (
      <PreThemeContext.Consumer>
        {(theme) => {
          return (
            <div style={this.themeStyles(theme)}>
              Class Consumer
            </div>
          );
        }}
      </PreThemeContext.Consumer>
    );
  }
}

export default PreClassConsumer;
`;

  return (
    <div className={classes.cardGroup}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}

export default FunctionVsClassText;
