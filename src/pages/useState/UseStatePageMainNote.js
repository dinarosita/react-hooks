import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseStatePageMainNote() {
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
        const [<span className={classes.variable}>state</span>,{" "}
        <span className={classes.variable}>setState</span>] ={" "}
        <span className={classes.thehook}>useState</span>(
        <span className={classes.variable}>initialState</span>)
      </pre>
    </div>
  );
}
