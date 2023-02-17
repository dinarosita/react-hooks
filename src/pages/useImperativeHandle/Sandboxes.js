import React from "react";
import classes from "../../styles/Global.module.css";

import Sandbox1 from "./Sandbox1";
import Sandbox2 from "./Sandbox2";
import Sandbox3 from "./Sandbox3";
import Sandbox5 from "./Sandbox5";
import Sandbox6 from "./Sandbox6";

export default function Sandboxes() {
  return (
    <section className={classes.mainsection}>
      <h2>Sandboxes</h2>
      <section className={classes.subsection}>
        <h3>Custom Ref</h3>
        <div className={classes.hFlex}>
          <Sandbox1 />
          <Sandbox2 />
          <Sandbox3 />
        </div>
      </section>
      <section className={classes.subsection}>
        <h3>Confirmation Modul</h3>
        <div className={classes.hFlex}>
          <Sandbox5 />
          <Sandbox6 />
        </div>
      </section>

      {/* <ShowHideProvider>
          <ShowHideButton textFile=<RealCaseText /> />
        </ShowHideProvider> */}
    </section>
  );
}
