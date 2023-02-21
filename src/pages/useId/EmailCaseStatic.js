import React from "react";
import classes from "../../styles/Global.module.css";
import EmailFormStatic from "./EmailFormStatic";

export default function EmailCaseStatic() {
  const text = String.raw`function EmailForm() {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </>
  );
}`;
  return (
    <div className={classes.scriptrun}>
      <h3>Plain</h3>
      <div>
        <EmailFormStatic />
        <p>In this email form, id is generated as a static constant. When the form component is used twice by a component, both input box will have the same id. therefore clicking the second label brings pointer to the first input box.</p>
        <EmailFormStatic />
        <pre className={classes.codeSnippet}>{text}</pre>
      </div>
    </div>
  );
}
