import React from "react";
import classes from "../../styles/Global.module.css";

import SandBox1 from "./SandBox1";
import SandBox2 from "./SandBox2";
import SandBox3 from "./SandBox3";
import SandBox4 from "./SandBox4";

export default function SandBox() {
  return (
    <section className={classes.mainsection}>
      <h2>SandBox</h2>
      <div className={classes.horizontalFlex}>
        <SandBox1 />
        <SandBox2 />
        <SandBox3 />
        <SandBox4 />
      </div>

      {/* <ShowHideProvider>
          <ShowHideButton textFile=<RealCaseText /> />
        </ShowHideProvider> */}
    </section>
  );
}
