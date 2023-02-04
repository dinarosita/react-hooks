import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";
import TransitionCodes from "./TransitionCodes";

export default function TransitionNotes() {
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
        <TransitionCodes />
      </div>
    </>
  );
}
