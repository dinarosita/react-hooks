import React from "react";
import classes from "../../layout/Global.module.css";

export default function HookText() {
  const title1 = "useTemplate";
  const text1 = String.raw`text`;
  const title2 = "useTemplate";
  const text2 = String.raw`text`;
  const title3 = "useTemplate";
  const text3 = String.raw`text`;

  return (
    <div className={classes.cardGroup}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
