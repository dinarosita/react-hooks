import React from "react";
import classes from "../../layout/Global.module.css";

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
      <div style={displayStatus} className={classes.codeGroup}>
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
    <div className={classes.cardGroup}>
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
