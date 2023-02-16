import React from "react";
import classes from "../../styles/Global.module.css";

import SandBox1 from "./SandBox1";
import SandBox2 from "./SandBox2";
import SandBox3 from "./SandBox3";
import Sandbox5 from "./Sandbox5";
import Sandbox6 from "./Sandbox6";

export default function SandBox() {
  return (
    <section className={classes.mainsection}>
      <h2>SandBoxes</h2>
      <section className={classes.subsection}>
        <h3>Custom Ref</h3>
        <div className={classes.hFlex}>
          <SandBox1 />
          <SandBox2 />
          <SandBox3 />
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
