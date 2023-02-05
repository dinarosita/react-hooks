import { useState } from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import IncrementText from "./IncrementText";

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
    <section>
      <div className={classes.niceFlow}>
        <h2>Increment</h2>
        <div className={classes.cardItem}>
          <div className={classes.displayMulti}>
            <button onClick={decrementCount}>-</button> <span>{count}</span>{" "}
            <button onClick={incrementCount}>+</button>
          </div>
          <div>Action: {action}</div>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<IncrementText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
