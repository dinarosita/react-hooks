import React from "react";
import classes from "../../styles/Global.module.css"
export default function EmailFormStatic() {
  return (
    <div className={classes.hFlex}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </div>
  );
}
