import React, { useState, useRef} from "react";

function FocusCase() {
  const [name, setName] = useState("Dina")
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  return (
    <div>
      <h2>Focus on Input</h2>
      <p>In a form, ref can handily used to focus on certain input.</p>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is <b>{name}</b></div>
    <button onClick={focus}>Focus</button>    
    </div>
  );
}

export default FocusCase;
