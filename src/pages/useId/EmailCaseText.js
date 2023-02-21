import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function EmailCaseText() {
  const title1 = "Title";
  const text1 = String.raw`Text`;

  return (
    <div className={classes.hFlex} >
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
    </div>
  );
}