import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseTransitionPageMainNote() {
  return (
    <>
      <p>
        It's a hook to make react app faster and more responsive to improve user
        experience. It works by giving priority to tasks within the function, so
        the higher priority one doesn't need to wait the lower priority one. It
        will render them separately.
      </p>
      <pre className={classes.formula}>
        const [<span className={fc.flag}>isPending</span>,{" "}
        <span className={fc.fn}>startTransition</span>] ={" "}
        <span className={fc.foc}>useTransition()</span>
      </pre>
      <p className={classes.paraTitle}>Returns 2 values:</p>
      <ul>
        <li>
          <code>isPending</code>: What to do/display instead in the case of
          calculation not ready yet
        </li>
        <li>
          <code>startTransition</code>: To wrap the low priority procedure.
        </li>
      </ul>
      <p className={classes.paraTitle}>Usage</p>

      <p>
        Only use this hook when it's absolutely needed, because this hook cause
        much more rendering than normal. Can unnecesarrily burdening if not
        actually needed.
      </p>
    </>
  );
}
