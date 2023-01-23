import React from "react";
import { useDisplay, useDisplayUpdate } from "./DisplayContext";
import PreThemeNotesContent from "./PreThemeNotesContent"

function PreThemeNotes(){
    const show = useDisplay();
    const toggleDisplay = useDisplayUpdate();

    const displayStatus = {
        display: show? "block" : "none"
    }
    
    return (
        <>
            <button onClick={toggleDisplay}>{show? "Hide codes" : "Show codes"}</button>
            <div style={displayStatus}>
                <PreThemeNotesContent />
            </div>
        </>
    )
}

export default PreThemeNotes;