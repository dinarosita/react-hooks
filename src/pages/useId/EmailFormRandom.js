import React from "react";
import classes from "../../styles/Global.module.css";
export default function EmailFormRandom() {
  const id = Math.random();
  return (
    <div className={classes.hFlex}>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </div>
  );
}
