import React, { useState } from "react";
import DeferCaseRegularList from "./DeferCaseRegularList";
import classes from "../../layout/Global.module.css";

export default function DeferCaseRegularInput({ size }) {
  const [input, setInput] = useState("");

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>Regular Input</h3>
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
            <DeferCaseRegularList input={input} size={size} />
          </ol>
        </div>
      </div>
    </div>
  );
}
