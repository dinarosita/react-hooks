import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import SimplifyCaseText from "./SimplifyCaseText";
import SimplifyCaseApp from "./SimplifyCaseApp";

export default function SimplifyCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Simplify Context Use</h2>

      <p>
        Create ThemeContext.js (see codes) to make sort of tool can be used with
        simple coding anywhere.
      </p>
      <SimplifyCaseApp />
      <ShowHideProvider>
        <ShowHideButton textFile=<SimplifyCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
