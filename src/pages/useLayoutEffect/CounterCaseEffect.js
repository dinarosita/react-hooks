import React from "react";
import { useEffect, useState } from "react";
import classes from "../../styles/Global.module.css";

export default function CounterCaseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>useEffect</p>
      <div className={classes.hFlex}>
        <span>{count}</span>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
    </div>
  );
}
