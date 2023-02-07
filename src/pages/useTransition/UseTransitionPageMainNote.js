import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseTransitionPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        It's a hook to make react app faster and more responsive to improve user
        experience. It works by giving priority to tasks within the function, so
        the higher priority one doesn't need to wait the lower priority one. It
        will render them separately.
      </p>
      <pre className={classes.formula}>
        const [<span className={classes.variable}>isPending</span>,{" "}
        <span className={classes.variable}>startTransition</span>] ={" "}
        <span className={classes.thehook}>useTransition()</span>
      </pre>
      <dl className={classes.dlMain}>
        <dt>Returns 2 values</dt>
        <dd>
          <ul>
            <li>
              <strong>isPending</strong>: What to do/display instead in the case of
              calculation not ready yet
            </li>
            <li>
              <strong>startTransition</strong>: To wrap the low priority procedure.
            </li>
          </ul>
        </dd>
        <dt>Usage</dt>
        <dd>
          Only use this hook when it's absolutely needed, because this hook
          cause much more rendering than normal. Can unnecesarrily burdening if
          not actually needed.
        </dd>
      </dl> 
    </div>
  );
}
