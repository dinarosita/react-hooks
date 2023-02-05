import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CounterEffect from "./CounterEffect";
import CounterLayoutEffect from "./CounterLayoutEffect";
import CounterText from "./CounterText";

export default function CounterCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Counter</h2>
        <div className={classes.cardGroup}>
          <CounterEffect />
          <CounterLayoutEffect />
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
          <ShowHideButton textFile=<CounterText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
