import React from "react";
import { useTransition } from "react";
import { useState } from "react";

export default function MyResponsiveForm() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  }
  return (
    <div>
      <label for="input">Input: </label>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <p>Updated input: {input}</p>
      <p>Updated list of {LIST_SIZE}:</p>
      {isPending ? (
        "Loading..."
      ) : (
        <ol
          style={{
            overflow: "auto",
            border: "3px solid lightgray",
            height: "6rem",
          }}
        >
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
