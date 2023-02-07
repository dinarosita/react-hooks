import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import SimplifyCaseText from "./SimplifyCaseText";
import SimplifyCaseApp from "./SimplifyCaseApp";


export default function SimplifyCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Simplify Context Use</h2>
        <div className={classes.cardGroup}>
          <SimplifyCaseApp />
        </div>

        <div className={classes.insertNote}>
          <p>Create ThemeContext.js (see codes) to make sort of tool can be used with simple coding anywhere.</p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<SimplifyCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
