import React from "react";
import { useLayoutEffect, useState } from "react";
import classes from "../../layout/Page.module.css";

export default function LayoutEffectCounter() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <span className={classes.displaybox}>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
