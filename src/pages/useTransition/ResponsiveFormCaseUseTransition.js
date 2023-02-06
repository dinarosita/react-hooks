import React from "react";
import { useTransition, useState } from "react";
import classes from "../../layout/Global.module.css";

export default function ResponsiveFormCaseUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>Responsive with useTransition</h3>
        <div>
          <label for="input">Input: </label>
          <input id="input" type="text" value={input} onChange={handleChange} />
          <p>Updated input: {input}</p>
          <p>Updated list of {LIST_SIZE} items:</p>
          {isPending ? (
            "Loading..."
          ) : (
            <ol
              style={{
                height: "6rem",
                maxWidth: "16rem",
                overflow: "auto",
                border: "3px solid lightgray",
              }}
            >
              {list.map((e) => (
                <li>{e}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
