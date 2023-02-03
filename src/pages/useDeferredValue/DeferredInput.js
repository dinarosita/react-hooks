import React, { useState } from "react";
import DeferredList from "./DeferredList";

export default function DeferredInput({ size }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <label for="input">Input: </label>
      <input
        id="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Typed input: {input}</p>
      <h4>List</h4>
      <ol
        style={{
          height: "7rem",
          maxWidth: "20rem",
          overflow: "auto",
          border: "3px solid lightgray",
        }}
      >
        <DeferredList input={input} size={size} />
      </ol>
    </div>
  );
}
