import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CodeText() {
  const title1 = "Title 1";
  const text1 = String.raw`Text 1`;

  const title2 = "Title 2";
  const text2 = String.raw`Text 2`;

  const title3 = "Title 3";
  const text3 = String.raw`Text 3`;

  const title4 = "Title 4";
  const text4 = String.raw`Text 4`;

  return (
    <div className={classes.horizontalFlex}>
      <div className={classes.verticalFlex}>
        <pre className={classes.verticalTitle}>Title</pre>
        <div className={classes.codeBox}>
          <pre>{title1}</pre>
          <pre>{text1}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title2}</pre>
          <pre>{text2}</pre>
        </div>
      </div>

      <div className={classes.verticalFlex}>
        <pre className={classes.verticalTitle}>Title</pre>
        <div className={classes.codeBox}>
          <pre>{title3}</pre>
          <pre>{text3}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title4}</pre>
          <pre>{text4}</pre>
        </div>
      </div>
    </div>
  );
}
