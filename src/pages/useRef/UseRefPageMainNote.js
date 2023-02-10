import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseRefPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        Hook <code>useRef</code> persist values between renders without causing
        re-rendering. It can be used to store mutable value that doesn't cause
        re-rendering when updated, and it can access a DOM element directly.
      </p>

      <pre className={classes.formula}>
        const <span className={fc.var}>refName</span> ={" "}
        <span className={fc.foc}>
          useRef(
          <span className={fc.val}>initialValue</span>)
        </span>
      </pre>

      <p className={classes.paraTitle}>Doesn't cause re-rendering</p>
      <p>
        Imagine a counter to count how many times our app renders. Using{" "}
        <code>useState</code>, the counting will cause state change, which will
        cause rerendering. And so on into an infinite loop. <code>useRef</code>{" "}
        provide a way to allow changes in variable that doesn't cause
        re-rendering like <code>useState</code>
      </p>
    </div>
  );
}
