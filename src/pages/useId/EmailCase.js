import React from "react";
import classes from "../../styles/Global.module.css";
import EmailCaseRandom from "./EmailCaseRandom";
import EmailCaseMultiple from "./EmailCaseMultiple";
import EmailCaseUseid from "./EmailCaseUseid";
import EmailCaseUseref from "./EmailCaseUseref";
import EmailCaseStatic from "./EmailCaseStatic";

export default function EmailCase() {
  const text = String.raw`function EmailCase() {
  return (
    <>
      <EmailForm />
      <p>Main article</p>
      <EmailForm />
    </>
  );
}`;
  return (
    <section className={classes.mainsection}>
      <h2>Email Form</h2>
      <p>
        All the EmailForm function below will be called twice from the main app.
      </p>
      <pre className={classes.codeSnippet}>{text}</pre>
      <section className={classes.subsection}>
        <h3>Comparison of IDs: static, randomized, and unique by useId</h3>
        <div className={classes.hFlex}>
          <EmailCaseStatic />
          <EmailCaseRandom />
          <EmailCaseUseid />
        </div>
      </section>
      <section className={classes.subsection}>
      <h3>Additional</h3>

        <div className={classes.hFlex}>
          <EmailCaseUseref />
          <EmailCaseMultiple />
        </div>
      </section>
    </section>
  );
}
