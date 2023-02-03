import React from "react"
import MyThemeConsumer from "./MyThemeConsumer"
import { MyThemeProvider } from "./MyThemeContext"


function MyThemeApp() {
    return (
        <MyThemeProvider>
            <MyThemeConsumer />
        </MyThemeProvider>
    )
}

export default MyThemeApp