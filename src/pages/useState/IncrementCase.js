import { useState } from "react";
import classes from "../../layout/CaseApp.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import IncrementText from "./IncrementText";

export default function IncrementCase() {
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
      <h2>Increment</h2>
      <button onClick={decrementCount}>-</button>{" "}
      <span className={classes.digitalBox}>{count}</span>{" "}
      <button onClick={incrementCount}>+</button>
      <p>Action: {action}</p>

      <ShowHideProvider>
        <ShowHideButton textFile=<IncrementText /> />
      </ShowHideProvider>
    </div>
  );
}
