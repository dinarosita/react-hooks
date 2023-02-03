import React from "react";
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleCodeContext";
import NoteTextTemplate from "./ReducerVsStateText"

function ReducerVsStateButton(){
    const show = useDisplay
    const toggleDisplay = useDisplayUpdate();

    const displayStatus = {
        display: show? "block" : "none"
    }
    
    return (
        <>
            <button onClick={toggleDisplay}>{show? "Hide codes" : "Show codes"}</button>
            <div style={displayStatus}>
                <NoteTextTemplate />
            </div>
        </>
    )
}

export default ReducerVsStateButton;