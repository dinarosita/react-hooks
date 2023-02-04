import React from "react";
import { useDisplay, useDisplayUpdate } from "./ToggleContext";
import classes from "./ShowHideButton.module.css";

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
      <div style={displayStatus} className={classes.codeBox}>{props.textFile}</div>
    </div>
  );
}
