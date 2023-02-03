import React, { useState, useContext } from "react"
const MyThemeContext = React.createContext()
const MyThemeUpdateContext = React.createContext()

export function useMyTheme() {
    return useContext(MyThemeContext)
}

export function useMyThemeUpdate() {
    return useContext(MyThemeUpdateContext)
}

export function MyThemeProvider ({ children }) {
    const [funTheme, setFunTheme] = useState(false);
    
    function toggleTheme () {
        setFunTheme((prevTheme) => !prevTheme)
    }

    return (
        <MyThemeContext.Provider value={funTheme}>
            <MyThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </MyThemeUpdateContext.Provider>
        </MyThemeContext.Provider>
    )
}