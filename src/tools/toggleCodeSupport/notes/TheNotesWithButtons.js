import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleCodeContext";

import UseLocalStorageCodes from "./UseLocalStorageCodes";

export default function TheNotesWithButtons() {
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
        <UseLocalStorageCodes />
      </div>
    </>
  );
}
