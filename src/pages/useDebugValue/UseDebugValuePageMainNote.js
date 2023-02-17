import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";

export default function UseDebugValueMainNote() {
  return (
    <>
      <p>
        React hook component values can easily be tracked in DevTool's
        "Components" tab (install React extension for DevTool). Find the app in
        focus in the DOM tree, and "hooks" section in the display. It lists all
        the hooks used in the app, and handily showing their value right next to
        it. It even works for custom hooks too. However just as is, custom hooks
        doesn't display any value right next to it, values can be accessed by
        clicking it. This is not very visually handy. Hook useDebugValue let us
        choose and display values right next to the hook.
      </p>
      <p className={classes.feedbackTitle}>Inside custom hook function:</p>
      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>var</span>)
        </span>
      </pre>

      <p className={classes.feedbackTitle}>Without useDebugValue:</p>
      <pre className={classes.feedback}>
        <span className={fc.block}>
          <b>Hooks:</b>
          <br />
          useLocalStorage:{"      "}
          <br />
          useState: value
        </span>
      </pre>

      <p className={classes.feedbackTitle}>With useDebugValue:</p>
      <pre className={classes.feedback}>
        <span className={fc.block}>
          <b>Hooks:</b>
          <br />
          useLocalStorage: value
          <br />
          useState: value
        </span>
      </pre>
    </>
  );
}
