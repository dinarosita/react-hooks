import React, { useState, useContext } from "react";

const DisplayContext = React.createContext();
const DisplayUpdateContext = React.createContext();

export function useDisplay() {
    return useContext(DisplayContext);
}

export function useDisplayUpdate() {
    return useContext(DisplayUpdateContext);
}

export function ShowHideProvider({ children }) {
    const [display, setDisplay] = useState(false);

    function toggleDisplay() {
        setDisplay((prevDisplay) => !prevDisplay);
    }
    return (
        <DisplayContext.Provider value={display}>
            <DisplayUpdateContext.Provider value={toggleDisplay}>
                {children}
            </DisplayUpdateContext.Provider>
        </DisplayContext.Provider>
    )
}