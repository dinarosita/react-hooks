import React from "react";
import { useDisplay, useDisplayUpdate } from "./ToggleContext";
import classes from "../styles/Global.module.css";

export default function ShowHideButton(props) {
  const show = useDisplay();
  const toggleDisplay = useDisplayUpdate();

  const displayStatus = {
    display: show ? "block" : "none",
  };
 
  return (
    <div>
        <p>{props.insert}</p>
      <button onClick={toggleDisplay} className={classes.toggleButton}>
        {show ? "Hide codes" : "Show codes"}
      </button>
      <div style={displayStatus} className={classes.codeDisplay}>{props.textFile}</div>
    </div>
  );
}
