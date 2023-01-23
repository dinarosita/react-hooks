import React, { useState } from "react";
import UseContextNotes1 from "../notes/UseContextNotes1";

export const NoteContext = React.createContext();

function NoteApp(props) {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay((prevDisplay) => !prevDisplay);
  }

  return (
    <NoteContext.Provider value={display}>
      <button onClick={toggleDisplay}>
        {display ? "Hide codes" : "Show codes"}
        </button>
        {display ? <UseContextNotes1 /> : <div />}
    </NoteContext.Provider>
  );
}

export default NoteApp;