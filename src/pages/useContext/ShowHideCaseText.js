import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function ShowHideCaseText() {
  const title1 = "ShowHideButton.js";
  const text1 = String.raw`import { useDisplay, useDisplayUpdate } from "./ToggleContext";

export default function ShowHideButton(props) {
  const show = useDisplay();
  const toggleDisplay = useDisplayUpdate();

  const displayStatus = {
    display: show ? "block" : "none",
  };

  return (
    <div className={classes.showHide}>
      <button onClick={toggleDisplay} className={classes.toggleButton}>
        {show ? "Hide codes" : "Show codes"}
      </button>
      <div style={displayStatus}>
        {props.textFile}
      </div>
    </div>
  );
}
`;
  const title2 = "ToggleContext.js";
  const text2 = String.raw`const DisplayContext = React.createContext();
const DisplayUpdateContext = React.createContext();

export function useDisplay() {
  return useContext(DisplayContext);
}

export function useDisplayUpdate() {
  return useContext(DisplayUpdateContext);
}

export function ShowHideProvider({ children }) {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay((prevDisplay) => !prevDisplay);
  }
  return (
    <DisplayContext.Provider value={display}>
      <DisplayUpdateContext.Provider value={toggleDisplay}>
        {children}
      </DisplayUpdateContext.Provider>
    </DisplayContext.Provider>
  );
}`;
  const title3 = "App using this button";
  const text3 = String.raw`export default function ShowHideCase() {
  return (
    <ShowHideProvider>
      <ShowHideButton textFile=<textFilename /> />
    </ShowHideProvider>
  );
}`;

  return (
    <div className={classes.hFlex}>
      <div className={classes.codeBox}>
        <pre>{title3}</pre>
        <pre>{text3}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
