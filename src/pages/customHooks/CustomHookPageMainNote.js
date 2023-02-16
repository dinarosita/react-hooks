import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"


export default function CustomHookPageMainNote() {
  return (
    <>
      <p>
        We can create custom hook with prefix <code>use</code>. This prefic
        allow React to treat our own-made hook like regular hooks, such as the
        way it work and error checking to make sure the codes working as
        expected. Name the js file using the same name.
      </p>

      <p className={classes.formulaTitle}>useCustom.js</p>
      <pre className={classes.formula}>
        function{" "}
        <span className={fc.foc}>
          useCustom() {"{"}
          <span className={fc.block}>...</span>
          {"}"}
        </span>
      </pre>
    </>
  );
}
