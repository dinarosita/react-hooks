import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ExampleScenario from "./ExampleScenario";
import ExampleText from "./ExampleText";


export default function ExampleCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Example Case</h2>
        <div className={classes.cardGroup}>
          <ExampleScenario />
          <ExampleScenario />
        </div>

        <div className={classes.insertNote}>
          <p>Note</p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<ExampleText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
