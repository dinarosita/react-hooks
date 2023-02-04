import React from "react";
import FunctionVsClassText from "./FunctionVsClassText"
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";

function FunctionVsClassButton(){
    const show = useDisplay();
    const toggleDisplay = useDisplayUpdate();

    const displayStatus = {
        display: show? "block" : "none"
    }
    
    return (
        <>
            <button onClick={toggleDisplay}>{show? "Hide codes" : "Show codes"}</button>
            <div style={displayStatus}>
                <FunctionVsClassText />
            </div>
        </>
    )
}

export default FunctionVsClassButton;