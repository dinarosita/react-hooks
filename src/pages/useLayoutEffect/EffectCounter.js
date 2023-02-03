import React from "react";
import { useEffect, useState } from "react";
import classes from "../Generic.module.css";

export default function EffectCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <span className={classes.displaybox}>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
