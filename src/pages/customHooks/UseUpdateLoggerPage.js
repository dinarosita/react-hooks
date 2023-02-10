import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import UseUpdateLoggerPageText from "./UseUpdateLoggerPageText";

export default function UseUpdateLoggerPage() {
  return (
    <section className={classes.mainsection}>
      
        <h2>UseUpdateLogger</h2>
        <p className={classes.tagline}>Logging value changes</p>

        <div className={classes.displaySingle} style={{width: "fit-content"}}>Open console to see log of input examples above</div>

        <ShowHideProvider>
          <ShowHideButton textFile=<UseUpdateLoggerPageText /> />
        </ShowHideProvider>
 </section>
  );
}
