import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseMemoPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        Hook useMemo memoized the return value calculated by the function
        contained within. Include the variables it depending on as dependencies.
        When there's no change in dependencies, this memoized value will be
        used. Recalculation only happen if any of the dependencies changed.
      </p>

      <pre className={classes.formula}>
        const <span className={classes.variable}>memoVal</span> ={" "}
        <span className={classes.thehook}>useMemo</span>(
        <span className={classes.variable}>memoFunction</span>,{" "}
        <span className={classes.variable}>[dependencies]</span>)
      </pre>

      <dl className={classes.dlMain}>
        <dt>Slow function</dt>
        <dd>
          Use useMemo in slow functions because their unnecesarry rendering
          causing page slowness.
        </dd>
        <dt>Reference based variable</dt>
        <dd>
          Use useMemo for reference based variables like object and array
          because their values are only the reference/address to the actual
          value and will always change by new creation, even when everything
          stays the same.
        </dd>
        <dt>Should I use it everytime?</dt>
        <dd>
          No, because it does open a new function to be run each time and it
          takes memory to store the value. Not a big deal when there's not many
          of it, but if it's becoming habit to use everytime, it will burden
          overall operation instead of being useful. Use it when needed.
        </dd>
      </dl>
    </div>
  );
}
