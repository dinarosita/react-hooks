import React, { useDeferredValue, useEffect, useState } from "react";

export default function InOneFile({ size }) {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const l = [];
  for (let i = 0; i < size; i++) {
    l.push(<li key={i}>{deferredInput}</li>);
  }

  useEffect(() => {
    console.log(`DeferredInput: ${deferredInput}`);
  }, [deferredInput]); 
  useEffect(() => {
    console.log(`Input: ${input}`);
  }, [input]);

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
        {l}
      </ol>
    </div>
  );
}
