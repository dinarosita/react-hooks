import React, { useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import Bunny from "./DeferCaseDeferredInput";
import DeferCaseOneFile from "./DeferCaseOneFile";
import DeferCaseRegularInput from "./DeferCaseRegularInput";
import DeferCaseText from "./DeferCaseText";

export default function DeferCase() {
  const [size, setSize] = useState(5000);
  function handleSize(e) {
    if (e.target.value > 20000) {
      setSize(20000);
    } else if (e.target.value < 1) {
      setSize(1);
    } else {
      setSize(e.target.value);
    }
  }
  return (
    <section className={classes.mainsection}>
      <h2>Deferred Input Case</h2>
      <div className={classes.scriptrun}>
        <label for="size">Enter list size (1-20000): </label>

        <input
          id="size"
          type="number"
          value={size}
          onChange={handleSize}
          style={{ maxWidth: "5rem" }}
        />
      </div>

      <div className={classes.hFlex}>
        <DeferCaseRegularInput size={size} />
        <Bunny size={size} />
        <DeferCaseOneFile size={size} />
      </div>

      <p>Open console to see input vs deferred input.</p>
      <ShowHideProvider>
        <ShowHideButton textFile=<DeferCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
