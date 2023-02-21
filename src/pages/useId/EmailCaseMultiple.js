import React from "react";
import classes from "../../styles/Global.module.css";
import EmailFormMultiple from "./EmailFormMultiple";

export default function EmailCaseMultiple() {
  const idEmail = "`${id}-email`";
  const idName = "`${id}-name`";
  const text = String.raw`function EmailForm() {
  const id = useId();
  return (
    <>
      <label htmlFor={${idEmail}}>Email</label>
      <input id={${idEmail}} type="email" />
      <br />
      <label htmlFor={${idName}}>Name</label>
      <input id={${idName}} type="text" /> 
    </>
  );
}`;
  return (
    <div className={classes.scriptrun}>
      <h3>Multiple Ids by 1 useId</h3>
      <div>
        <EmailFormMultiple />
        <p>
          When we have multiple id in a component, we don't need to create
          multiple ids each using its own useId hook. We can just modify that
          unique id's name
        </p>
        <EmailFormMultiple /> <pre className={classes.codeSnippet}>{text}</pre>
      </div>
    </div>
  );
}
