import React from "react";
import classes from "../../styles/Global.module.css";
import EmailFormUseid from "./EmailFormUseid";

export default function EmailCaseUseId() {
  const text = String.raw`function EmailForm() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}`;
  return (
    <div className={classes.scriptrun}>
      <h3>useId</h3>
      <div>
        <EmailFormUseid />
        <p>
          Hook useId creates unique id if everything in the same order, the
          server and client are going to generate the ame id for each.
        </p>
        <EmailFormUseid />
        <pre className={classes.codeSnippet}>{text}</pre> 
      </div>
    </div>
  );
}
