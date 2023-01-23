import React from "react"
import DinaThemeConsumer from "./DinaThemeConsumer"
import { DinaThemeProvider } from "./DinaThemeContext"


function DinaThemeApp() {
    return (
        <DinaThemeProvider>
            <DinaThemeConsumer />
        </DinaThemeProvider>
    )
}

export default DinaThemeApp