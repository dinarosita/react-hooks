import React, { useState, useRef } from "react";
import classes from "../../layout/Global.module.css";

export default function FocusCaseMistake() {
  const [name, setName] = useState("Dina");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = "Focus value";
  }

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>Common Mistake</h3>
        <div className={classes.cardItem}>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>Name: {name}</div>
          <button onClick={focus}>Focus</button>
        </div>
      </div>
    </div>
  );
}
