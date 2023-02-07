import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseDeferredValuePageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        This hook improve sluggishness and responsiveness by bunching up state
        changes together. Say we have input box that capture change every key
        stroke and every change trigger response. This can be unnecessarily too
        frequent. Using <code>useDeferredValue</code>, state changes can be
        collected until it's handy for react to render together. For using, just
        wrap the wanted state with the hook.
      </p>
      <pre className={classes.formula}>const <span className={classes.variable}>deferredState</span> = <span className={classes.thehook}>useDeferredValue(<span className={classes.variable}>state</span>)</span></pre>
    </div>
  );
}
