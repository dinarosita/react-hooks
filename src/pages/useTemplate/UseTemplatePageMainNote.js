import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseTemplatePageMainNote() {
  return (
    <>
      <p>Template</p>
      <pre className={classes.formula}>
        <span className={fc.foc}>useHook</span>
        <span className={fc.prop}>prop</span>
        <span className={fc.fn}>function</span>
        <span className={fc.dep}>[dependencies]</span>)
      </pre>

      <p className={classes.paraTitle}>Paragraph title</p>
      <p>Template</p>
    </>
  );
}
