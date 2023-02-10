import { useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import IncrementCaseText from "./IncrementCaseText";

export default function IncrementCase() {
  const [count, setCount] = useState(4);
  const [action, setAction] = useState("Let's go!");
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setAction("Going down");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setAction("Going up");
  }

  return (
    <section className={classes.mainsection}>
      <h2>Increment Case</h2>
      <div className={classes.scriptrun}>
        <div className={classes.horizontalFlex}>
          <button onClick={decrementCount}>-</button> <span>{count}</span>{" "}
          <button onClick={incrementCount}>+</button>
        </div>
        <div>Action: {action}</div>
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<IncrementCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
