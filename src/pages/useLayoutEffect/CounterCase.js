import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CounterCaseEffect from "./CounterCaseEffect";
import CounterCaseLayoutEffect from "./CounterCaseLayoutEffect";
import CounterCaseText from "./CounterCaseText";

export default function CounterCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Counter Case</h2>
        <div className={classes.cardGroup}>
          <CounterCaseEffect />
          <CounterCaseLayoutEffect />
        </div>
        <div className={classes.insertNote}>
          <p>
            Can't see the difference in this example, but this is to illutrate
            that the syntax is the same. useEffect is faster because the screen
            painting doesn't have to wait useEffect to run. So when it doesn't
            actually affect the layout, or if it does but doesn't matter, use
            useEffect instead.
          </p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<CounterCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
