import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import SlowFunctionCasePlain from "./SlowFunctionCasePlain";
import SlowFunctionCaseText from "./SlowFunctionCaseText";
import SlowFunctionCaseUseMemo from "./SlowFunctionCaseUseMemo";

export default function SlowFunctionCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Slow Function Case</h2>

      <p>
        Double number function is made slow. When number is changed, rendering
        will be slow. Changing theme alone is fast, however since everything got
        rerendered, and double function is slow, changing theme becoming slow
        too.
      </p>
      <div>
        <SlowFunctionCasePlain />
        <SlowFunctionCaseUseMemo />
      </div>

      <ShowHideProvider>
        <ShowHideButton textFile=<SlowFunctionCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
