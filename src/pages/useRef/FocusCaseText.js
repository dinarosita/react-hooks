import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function FocusCaseText() {
  const title1 = "Focus on Input";
  const text1 = String.raw`export default function FocusCaseUseRef() {
  const [name, setName] = useState("Dina");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    <div>Name: {name}</div>
    <button onClick={focus}>Focus</button>        
    </div>
  );
}
`;
  const title2 = "Focus mistake";
  const text2 = String.raw`export default function FocusCaseMistake() {
  const [name, setName] = useState("Dina");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = "Focus value";
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Name: {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}
`;

  return (
    <div className={classes.hFlex}>
        <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
