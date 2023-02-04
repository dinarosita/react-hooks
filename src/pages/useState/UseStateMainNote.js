import React from "react";
import classes from "../../layout/Note.module.css";

export default function UseStateMainNote() {
  return (
    <div>
      <p>
        useState is a hook that create states and manage its updates. It returns
        returns 2 values: the new state and function setState that update the
        state. An initialValue can be added as a parameter. This value will be
        used upon page refresh. For the subsequent rendering, latest updated
        state value will be used, until setState update it with new value.
      </p>
      <pre className={classes.formula}>
        const [<span className={classes.var}>state</span>,{" "}
        <span className={classes.var}>setState</span>] ={" "}
        <span className={classes.func}>useState</span>(
        <span className={classes.var}>initialState</span>)
      </pre>
    </div>
  );
}
