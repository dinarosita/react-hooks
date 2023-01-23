import React, { useState, useContext } from "react"
const DinaThemeContext = React.createContext()
const DinaThemeUpdateContext = React.createContext()

export function useDinaTheme() {
    return useContext(DinaThemeContext)
}

export function useDinaThemeUpdate() {
    return useContext(DinaThemeUpdateContext)
}

export function DinaThemeProvider ({ children }) {
    const [funTheme, setFunTheme] = useState(false);
    
    function toggleTheme () {
        setFunTheme((prevTheme) => !prevTheme)
    }

    return (
        <DinaThemeContext.Provider value={funTheme}>
            <DinaThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </DinaThemeUpdateContext.Provider>
        </DinaThemeContext.Provider>
    )
}