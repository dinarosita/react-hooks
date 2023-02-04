import React from "react";
import classes from "../../../layout/Page.module.css";

export default function TransitionCodes() {
  const title1 = "Sluggish without useTransition";
  const text1 = String.raw`...

function SluggishForm() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }

  return (
    <div>
      <label for="input">Input: </label>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <p>Updated input: {input}</p>
      <p>Updated list of {LIST_SIZE} items:</p>
      <ol>{list.map((e) => (<li>{e}</li>))}</ol>
    </div>
  );
}
...`;
  const title2 = "Responsive with useTransition";
  const text2 = String.raw`...

function ResponsiveForm() {
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
    <div>
      <label for="input">Input: </label>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <p>Updated input: {input}</p>
      <p>Updated list of {LIST_SIZE} items:</p>
      {isPending 
        ? "Loading..."
        : <ol>{list.map((e) => (<li>{e}</li>))}</ol>
      }
    </div>
  );
}
`;

  return (
    <div className={classes.flexbox}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
