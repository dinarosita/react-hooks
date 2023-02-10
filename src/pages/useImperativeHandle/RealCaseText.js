import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function RealCaseText() {
  const title1 = "useTemplate";
  const text1 = String.raw`text`;
  const title2 = "useTemplate";
  const text2 = String.raw`text`;
  const title3 = "useTemplate";
  const text3 = String.raw`text`;

  return (
    <div className={classes.horizontalFlex}>
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title3}</pre>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
