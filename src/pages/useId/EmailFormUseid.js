import React, { useId } from "react";
import classes from "../../styles/Global.module.css";
export default function EmailFormUseid() {
  const id = useId();
  return (
    <div className={classes.hFlex}>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </div>
  );
}
