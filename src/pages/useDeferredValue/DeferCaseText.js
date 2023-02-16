import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function DeferCaseText() {
  const title1a = "Regular Input";
  const text1a = String.raw`export default function RegularInput({ size }) {
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
        <RegularList input={input} size={size} />
      </ol>
    </div>
  );
}`;
  const title1b = "Regular List";
  const text1b = String.raw`export default function RegularList({ input, size }) {
  const l = [];

  for (let i = 0; i < size; i++) {
    l.push(<li key={i}>{input}</li>);
  }

  return l;
}`;
  const title2a = "Deferred Input";
  const text2a = String.raw`export default function DeferredInput({ size }) {
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
      <DeferredList input={input} size={size} />
    </ol>
    </div>
  );
}`;
  const title2b = "Deferred List";
  const text2b = String.raw`export default function DeferCaseDeferredList({ input, size }) {
  const deferredInput = useDeferredValue(input);
  const l = [];

  for (let i = 0; i < size; i++) {
    l.push(<li key={i}>{deferredInput}</li>);
  }
  
  return l;
}
`;
  const title3 = "Deferred in 1 file";
  const text3 = String.raw`export default function OneFile({ size }) {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const l = [];
  for (let i = 0; i < size; i++) {
    l.push(<li key={i}>{deferredInput}</li>);
  }

  return (
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
        {l}
      </ol>
    </div>
  );
}`;

  return (
    <div className={classes.hFlex}>
      <div className={classes.vFlex}>
        <div className={classes.codeBox}>
          <pre>{title1a}</pre>
          <pre>{text1a}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title1b}</pre>
          <pre>{text1b}</pre>
        </div>
      </div>

      <div className={classes.vFlex}>
        <div className={classes.codeBox}>
          <pre>{title2a}</pre>
          <pre>{text2a}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title2b}</pre>
          <pre>{text2b}</pre>
        </div>
      </div>

      <div className={classes.vFlex}>
        <div className={classes.codeBox}>
          <pre>{title3}</pre>
          <pre>{text3}</pre>
        </div>
      </div>
    </div>
  );
}
