import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseTemplatePageMainNote() {
  return (
    
      <p>Note</p>

      <pre className={classes.formula}>
        <span className={fc.foc}>hook</span>
        <span className={fc.var}>variable</span>
        <span className={fc.block}>codeblock</span></pre>
    </div>
  );
}
