import React, { useId, useRef } from "react";
import classes from "../../styles/Global.module.css";
export default function EmailFormUseref() {
  const id = useId();
  const ref = useRef();
  return (
    <div className={classes.hFlex}>
      <label htmlFor={id}>Email</label>
      <input ref={ref} id={id} type="email" />
    </div>
  );
}
