import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import RealCaseScenario from "./RealCaseScenario";
import RealCaseText from "./RealCaseText";

export default function RealCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Real Case</h2>
      <div className={classes.horizontalFlex}>
        <RealCaseScenario />
        <RealCaseScenario />
      </div>

      <ShowHideProvider>
        <ShowHideButton textFile=<RealCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
