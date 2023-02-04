import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";
import LayoutEffectPopupCodes from "./LayoutEffectPopupCodes";

export default function LayoutEffectPopupNotes() {
  const show = useDisplay();
  const toggleDisplay = useDisplayUpdate();

  const displayStatus = {
    display: show ? "block" : "none",
  };

  return (
    <>
    <p>Refresh page to see the lagged effect when useEffect is used instead of useLayoutEffect. Button without effect is included for comparison.</p>
      <button onClick={toggleDisplay}>
        {show ? "Hide codes" : "Show codes"}
      </button>
      <div style={displayStatus}>
        <LayoutEffectPopupCodes />
      </div>
    </>
  );
}
