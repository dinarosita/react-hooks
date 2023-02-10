import React, { useState } from "react";
import DeferCaseDeferredList from "./DeferCaseDeferredList";
import classes from "../../styles/Global.module.css";

export default function DeferCaseDeferredInput({ size }) {
  const [input, setInput] = useState("");

  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>Deferred Input</p>
      <div>
        <label for="input">Input: </label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>Input: {input}</p>
        <h4>List</h4>
        <ol
          style={{
            height: "7rem",
            maxWidth: "20rem",
            overflow: "auto",
            border: "3px solid lightgray",
          }}
        >
          <DeferCaseDeferredList input={input} size={size} />
        </ol>
      </div>
    </div>
  );
}
