import React from "react";
import { useEffect, useState } from "react";
import classes from "../../layout/Global.module.css";

export default function CounterCaseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>useEffect</h3>
        <div className={classes.displayMulti}>
          <span>{count}</span>
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </div>
      </div>
    </div>
  );
}
