import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CounterCaseEffect from "./CounterCaseEffect";
import CounterCaseLayoutEffect from "./CounterCaseLayoutEffect";
import CounterCaseText from "./CounterCaseText";

export default function CounterCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Counter Case</h2>
      <div className={classes.horizontalFlex}>
        <CounterCaseEffect />
        <CounterCaseLayoutEffect />
      </div>
      <p>
        Can't see the difference in this example, but this is to illutrate that
        the syntax is the same. useEffect is faster because the screen painting
        doesn't have to wait useEffect to run. So when it doesn't actually
        affect the layout, or if it does but doesn't matter, use useEffect
        instead.
      </p>
      <ShowHideProvider>
        <ShowHideButton textFile=<CounterCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
