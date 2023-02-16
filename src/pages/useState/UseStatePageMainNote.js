import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseStatePageMainNote() {
  return (
    <>
      <p>
        useState is a hook that create states and manage its updates. It returns
        returns 2 values: the new state and function setState that update the
        state. An initialValue can be added as a parameter. This value will be
        used upon page refresh. For the subsequent rendering, latest updated
        state value will be used, until setState update it with new value.
      </p>
      <pre className={classes.formula}>
        const [<span className={fc.var}>state</span>, <span className={fc.fn}>setState</span>] = <span className={fc.foc}>useState(
        <span className={fc.val}>initialState</span>)</span>
      </pre>
    </>
  );
}
