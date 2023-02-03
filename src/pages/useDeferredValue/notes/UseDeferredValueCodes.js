import React from "react";
import classes from "../../../pages/Generic.module.css";

export default function UseDeferredValueCodes() {
  const title1 = "title 1";
  const text1 = String.raw`Howdy`;
  const title2 = "title 2";
  const text2 = String.raw`Howdy`;

  return (
    <div className={classes.flexbox}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
