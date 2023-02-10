import React from "react";
import classes from "../styles/Global.module.css";
import fc from "../styles/Formula.module.css";

export default function RandomTips() {
  return (
    <section className={classes.mainsection}>
      <h1>Random Tips</h1>

      <p className={classes.paraTitle}>Joining multiple classNames</p>
      <pre className={classes.formula}>
        &lt;div{" "}
        <span className={fc.foc}>
          className={"{"}
          <span className={fc.prop}>[classes.class1, classes.class2]</span>
          <span className={fc.val}>.join(' ')</span>
          {"}"}
        </span>{" "}
        &gt;
      </pre>

      <p className={classes.paraTitle}>More tips coming</p>
      <pre className={classes.formula}>
        <span className={fc.foc}>SampleCode</span>
      </pre>
    </section>
  );
}
