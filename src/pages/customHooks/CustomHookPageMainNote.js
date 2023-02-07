import React from "react";
import classes from "../../layout/Global.module.css";

export default function CustomHookPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        We can create custom hook with prefix <code>use</code>. This prefic
        allow React to treat our own-made hook like regular hooks, such as the
        way it work and error checking to make sure the codes working as
        expected. Name the js file using the same name.
      </p>

      <p className={classes.boxTitleRed}>useCustom.js</p>
      <pre className={classes.formula}>
        function{" "}
        <span className={classes.thehook}>
          useCustom() {"{"}
          <span className={classes.codeblock}>...</span>
          {"}"}
        </span>
      </pre>
    </div>
  );
}
