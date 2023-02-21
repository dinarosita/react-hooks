import React from "react";
import classes from "../../styles/Global.module.css";
import EmailFormUseid from "./EmailFormUseid";

export default function EmailCaseUseref() {
  const text = String.raw`function EmailForm() {
  const id = useId();
  const ref = useRef();
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input ref={ref} id={id} type="email" />
    </>
  );
}`;
  return (
    <div className={classes.scriptrun}>
      <h3>Refs by useRef</h3>
      <div>
        <EmailFormUseid />

        <p>
          In React we can't use document query selector. Instead we are using
          ref created by useRef
        </p>
        <EmailFormUseid />
        <pre className={classes.codeSnippet}>{text}</pre>
      </div>
    </div>
  );
}
