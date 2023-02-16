import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseEffectPageMainNote() {
  return (
    <>
      <p>
        useEffect is a hook that triggers side effect to happen when there's
        changes in its dependencies. The codes run asynchronously to the
        rendering, allowing the main rendering to be done without waiting side
        effect to finish.
      </p>

      <pre className={classes.formula}>
        <span className={fc.foc}>
          useEffect(
          <span className={fc.fn}>effectFn</span>,{" "}
          <span className={fc.dep}>[dependencies]</span>)
        </span>
      </pre>

      <p className={classes.paraTitle}>Return for cleaning up</p>
      <p>
        Return at the end of a useEffect function might be needed to clean up
        things that are made in previous useEffect render. Write this return at
        the end of the code as usual, it will be run prior to the next useEffect
        render when it is triggered, to clean up the remnants of previous run.
      </p>
      <p>
        A good example of where this is needed is when addEventListener is
        created. If we don't remove it, it will create a lot of event listeners.
        They should be each closed when they are not needed anymore: before the
        next one is created.
      </p>
    </>
  );
}
