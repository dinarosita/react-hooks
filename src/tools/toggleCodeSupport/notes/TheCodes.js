import React from "react";
import classes from "../../../pages/Generic.module.css";

export default function TheCodes() {
  const title1 = "AppName.js";
  const text1 = String.raw`
Content
`;
  const title2 = "AppName.js";
  const text2 = String.raw`
Content
`;
  const title3 = "AppName.js";
  const text3 = String.raw`
Content
`;

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
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
