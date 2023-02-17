import React from "react";
import classes from "../../styles/Global.module.css";

import TSandbox1 from "./TSandbox1";

export default function TSandboxes() {
  return (
    <section className={classes.mainsection}>
      <h2>SandBoxes</h2>
      <section className={classes.subsection}>
        <h3>Title</h3>
        <div className={classes.hFlex}>
          <TSandbox1 />
          <TSandbox1 />
        </div>
      </section>
    </section>
  );
}
