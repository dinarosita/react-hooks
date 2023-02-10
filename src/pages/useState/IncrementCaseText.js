import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function IncrementCaseText() {
  const title1 = "IncrementCase.js";
  const text1 = String.raw`export default function IncrementCase() {
  const [count, setCount] = useState(4);
  const [action, setAction] = useState("Click to start");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setAction("Going down");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setAction("Going up");
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>{count}{" "}
      <button onClick={incrementCount}>+</button>
      <p>Action: {action}</p>
    </div>
  );
}`;

  return (
    <div className={classes.horizontalFlex}>
        <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
    </div>
  );
}
