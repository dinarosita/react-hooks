import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseCallbackPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        This hook cache a function definition between rerenders. It works like
        useMemo, but for functions. The variable sets with useMemo will get the
        return value as the new value. With useCallback, the variable is set
        with the entire function.
      </p>

      <pre className={classes.formula}>
        const <span className={classes.variable}>callbackVal</span> ={" "}
        <span className={classes.thehook}>useCallback</span>(
        <span className={classes.variable}>callbackFunction</span>,{" "}
        <span className={classes.variable}>[dependencies]</span>)
      </pre>

      <dl className={classes.dlMain}>
        <dt>2 situations to use useCallback:</dt>
        <dd>
          <ul>
            <li>The function takes extra parameter (like in below example)</li>
            <li>
              For the purpose of creating new functions, but we might not
              encounter this.
            </li>
          </ul>
        </dd>

        <dt>Rarely used: Consider useMemo first</dt>
        <dd>
          In most cases, what we worry of is referential equality. We want the
          function to not rerender if the dependencies don't change. And in that
          case, the return value will be the same. Hook useMemo is already
          intended for this purpose.
        </dd>
      </dl>
    </div>
  );
}
