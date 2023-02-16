import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CountApp from "./countApp/CountApp";
import CountAppUsestate from "./countApp/CountAppUsestate";
import MyCount2App from "./countApp/MyCount2App";
import MyCount3App from "./countApp/MyCount3App";
import MyCount4App from "./countApp/MyCount4App";
import CountCaseText from "./CountCaseText";

export default function CountCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Count Case</h2>
      <div className={classes.hFlex}>
        <CountApp />
        <CountAppUsestate />
        <MyCount2App />
        <MyCount3App />
        <MyCount4App />
      </div>

      <ShowHideProvider>
        <ShowHideButton textFile=<CountCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
