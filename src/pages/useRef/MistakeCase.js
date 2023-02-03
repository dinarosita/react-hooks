import React, { useState, useRef} from "react";

function MistakeCase() {
  const [name, setName] = useState("Dina")
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
    inputRef.current.value = "Some value"
  }

  return (
    <div>
      <h2>Common Mistake</h2>
      <p>A common mistake is to abuse above power. Important note here, useRef doesn't actually change the value of useState. Evidently, the name in the feedback line doesn't get changed. Similarly, don't use it for appendChild/removeChild etc either, use React and actual JSX for that.</p>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is <b>{name}</b></div>
    <button onClick={focus}>Focus</button>    
    </div>
  );
}

export default MistakeCase;
