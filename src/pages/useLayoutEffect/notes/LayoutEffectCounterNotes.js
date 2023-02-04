import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";
import LayoutEffectCounterCodes from "./LayoutEffectCounterCodes";

export default function LayoutEffectCounterNotes() {
  const show = useDisplay();
  const toggleDisplay = useDisplayUpdate();

  const displayStatus = {
    display: show ? "block" : "none",
  };

  return (
    <>
    <p>Can't see the difference in this example, but this is to illutrate that the syntax is the same. useEffect is faster because the screen painting doesn't have to wait useEffect to run. So when it doesn't actually affect the layout, or if it does but doesn't matter, use useEffect instead.</p>
      <button onClick={toggleDisplay}>
        {show ? "Hide codes" : "Show codes"}
      </button>
      <div style={displayStatus}>
        <LayoutEffectCounterCodes />
      </div>
    </>
  );
}
