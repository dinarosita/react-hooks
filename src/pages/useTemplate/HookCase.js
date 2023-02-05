import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import HookCaseA from "./HookCaseA";
import HookText from "./HookText";


export default function HookCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Hook Case</h2>
        <div className={classes.cardGroup}>
          <HookCaseA />
          <HookCaseA />
        </div>

        <div className={classes.insertNote}>
          <p>Note</p>>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<HookText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
