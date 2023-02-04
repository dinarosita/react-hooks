import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";
import SimplifyFunctionText from "./SimplifyFunctionText"

function SimplifyFunctionButton(){
    const show = useDisplay();
    const toggleDisplay = useDisplayUpdate();

    const displayStatus = {
        display: show? "block" : "none"
    }
    
    return (
        <>
            <button onClick={toggleDisplay}>{show? "Hide codes" : "Show codes"}</button>
            <div style={displayStatus}>
                <SimplifyFunctionText />
            </div>
        </>
    )
}

export default SimplifyFunctionButton;