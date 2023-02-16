import React from "react";
import { useLayoutEffect, useState } from "react";
import classes from "../../styles/Global.module.css";

export default function CounterCaseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>useLayoutEffect</p>
      <div className={classes.hFlex}>
        <span>{count}</span>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
    </div>
  );
}
