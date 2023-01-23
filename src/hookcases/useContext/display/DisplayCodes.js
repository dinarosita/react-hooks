import React from "react";
import { DisplayProvider } from "./DisplayProvider";
import UseContextNotes1 from "./UseContextNotes1";

function DisplayCodes() {
    return(
        <DisplayProvider>
            <UseContextNotes1 />
        </DisplayProvider>
    )
}
export default DisplayCodes