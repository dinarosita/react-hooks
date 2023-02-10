import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

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
        const <span className={fc.var}>cachedVal</span> ={" "}
        <span className={fc.foc}>useMemo(
        <span className={fc.fn}>calculateValFn</span>,{" "}
        <span className={fc.dep}>[dependencies]</span>)</span>
      </pre>

      <p className={classes.paraTitle}>Slow function</p>
      <p>Use useMemo in slow functions because their unnecesarry rendering
          causing page slowness.</p>

          <p className={classes.paraTitle}>Reference based variable</p>
          <p>Use useMemo for reference based variables like object and array
          because their values are only the reference/address to the actual
          value and will always change by new creation, even when everything
          stays the same.</p>

          <p className={classes.paraTitle}>Should I use it everytime?</p>
          <p>No, because it does open a new function to be run each time and it
          takes memory to store the value. Not a big deal when there's not many
          of it, but if it's becoming habit to use everytime, it will burden
          overall operation instead of being useful. Use it when needed.</p>

    </div>
  );
}
