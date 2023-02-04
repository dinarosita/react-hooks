import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";
import UseUpdateLoggerCodes from "./UseUpdateLoggerCodes";

export default function UseUpdateLoggerNote() {
  const show = useDisplay();
  const toggleDisplay = useDisplayUpdate();

  const displayStatus = {
    display: show ? "block" : "none",
  };

  return (
    <>
      <button onClick={toggleDisplay}>
        {show ? "Hide codes" : "Show codes"}
      </button>
      <div style={displayStatus}>
        <UseUpdateLoggerCodes />
      </div>
    </>
  );
}
