import React, { useState, useRef } from "react";
import classes from "../../styles/Global.module.css";

export default function FocusCaseMistake() {
  const [name, setName] = useState("Dina");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = "Focus value";
  }

  return (
    <section className={classes.subsection}>
      <h3>Common Mistake</h3>
      <div className={classes.scriptrun}>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>Name: {name}</div>
        <button onClick={focus}>Focus</button>
      </div>
    </section>
  );
}
