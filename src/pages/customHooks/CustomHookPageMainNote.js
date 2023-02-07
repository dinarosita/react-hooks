import React from "react";
import classes from "../../layout/Global.module.css";

export default function CustomHookPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>Note</p>

      <pre className={classes.formula}>
        <span className={classes.thehook}>hook</span>
        <span className={classes.variable}>variable</span>
        <span className={classes.codeblock}>codeblock</span></pre>
    </div>
  );
}
