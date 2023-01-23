import React, { useState } from "react";
import UseContextNotes1 from "../notes/UseContextNotes1";

function CodeSection(props) {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay((prevDisplay) => !prevDisplay);
  }
  
  return (
    <>
      <button onClick={toggleDisplay}>
        {display ? "Hide Codes" : "Show Codes"}
      </button>
      {display ? <UseContextNotes1 /> : ""}
    </>
  );
}

export default CodeSection;
