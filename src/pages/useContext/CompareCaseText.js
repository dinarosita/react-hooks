import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CompareCaseText() {
  const title1 = "CompareCaseApp.js";
  const text1 = String.raw`
export const ThemeContext = React.createContext();

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
      <div>
        <FunctionConsumer />
        <ClassConsumer />
      </div>
    </ThemeContext.Provider>
  );
}`;

  const title2 = "FunctionConsumer.js";
  const text2 = String.raw`import React, { useContext } from "react";
import { ThemeContext } from "./CompareCaseApp";

export default function FunctionConsumer() {
  const dark = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
    padding: "1.5rem",
    border: "2px solid gray",
    borderRadius: ".5rem",
    fontWeight: "bold",
  };

  return (
    <div style={themeStyles}>
      Function Consumer
    </div>;
  )
}`;
  const title3 = "ClassConsumer.js";
  const text3 = String.raw`import React, { Component } from "react";
import { ThemeContext } from "./CompareCaseApp";

export default class CompareCaseClassConsumer extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "gray" : "white",
      color: dark ? "white" : "gray",
      padding: "1.5rem",
      border: "2px solid gray",
      borderRadius: ".5rem",
      fontWeight: "bold",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <div style={this.themeStyles(theme)}>
              Class Consumer
            </div>;
          )
        }}
      </ThemeContext.Consumer>
    );
  }
}
`;

  return (
    <div className={classes.hFlex}>
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title3}</pre>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
