import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";

export default function UseContextPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        Hook <code>useContext</code> allowing a context (with values within) to
        be used globally by en element and all of its descendants.
      </p>

      <pre className={classes.formula}>
        const <span className={fc.var}>contextVal</span> ={" "}
        <span className={fc.foc}>
          useContext(<span className={fc.var}>SomeContext</span>)
        </span>
      </pre>

      <p className={classes.formulaTitle}>Create and export theme</p>
      <pre className={classes.formula}>
        export const <span className={fc.foc}>SomeContext</span> ={" "}
        <span className={fc.fn}>React.createContext()</span>
      </pre>

      <p className={classes.formulaTitle}>
        Use it as global parent in return block
      </p>
      <pre className={classes.formula}>
        <span className={fc.foc}>
          &lt;SomeContext<span className={fc.att}>.Provider</span>{" "}
          <span className={fc.prop}>
            value={"{"}
            <span className={fc.propval}>contextVal</span>
            {"}"}
          </span>
          &gt;
        </span>
        <br />
        {"  "}
        <span className={fc.block}>...child...</span>
        <br />
        <span className={fc.foc}>
          &lt;/SomeContext<span className={fc.att}>.Provider</span>&gt;
        </span>
      </pre>
    </div>
  );
}
