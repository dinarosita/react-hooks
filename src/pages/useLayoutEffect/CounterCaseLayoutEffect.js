import React from "react";
import { useLayoutEffect, useState } from "react";
import classes from "../../layout/Global.module.css";

export default function CounterCaseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>useLayoutEffect</h3>
        <div className={classes.displayMulti}>
          <span>{count}</span>
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </div>
      </div>
    </div>
  );
}
