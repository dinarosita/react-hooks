import React from "react";
import classes from "../../styles/Global.module.css";
import EmailFormRandom from "./EmailFormRandom";

export default function EmailCaseRandom() {
  const text = String.raw`function EmailForm() {
  const id = Math.random();
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}`;
  return (
    <div className={classes.scriptrun}>
      <h3>Random</h3>
      <div>
        <EmailFormRandom />
        <p>
          In this email form, id is generated using randomized number. This will
          guarantee the id will be different eventhough coming from the same
          code. Each email box now has different id. However it can't be used in
          the system where both client side and server side will do rendering
          and the id has to identical, since they will generate
          differentrandomized number.
        </p>

        <EmailFormRandom />
        <pre className={classes.codeSnippet}>{text}</pre>
      </div>
    </div>
  );
}
