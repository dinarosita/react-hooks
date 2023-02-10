import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ExampleCaseScenario from "./ExampleCaseScenario";
import ExampleCaseText from "./ExampleCaseText";


export default function ExampleCase() {
  return (
    <section className={classes.mainsection}>
      
        <h2>Example Case</h2>
        <div className={classes.horizontalFlex}>
          <ExampleCaseScenario />
          <ExampleCaseScenario />
        </div>


        <ShowHideProvider>
          <ShowHideButton textFile=<ExampleCaseText /> />
        </ShowHideProvider>
 </section>
  );
}
