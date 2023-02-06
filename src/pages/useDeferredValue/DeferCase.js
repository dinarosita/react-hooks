import React, { useState } from "react";
import classes from "../../layout/Global.module.css";
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
    <section>
      <div className={classes.niceFlow}>
        <h2>Deferred Input Case</h2>
        <div>
          <label for="size">Enter list size (1-20000): </label>

          <input
            id="size"
            type="number"
            value={size}
            onChange={handleSize}
            style={{ maxWidth: "5rem" }}
          />
        </div>

        <div className={classes.cardGroup}>
          <DeferCaseRegularInput size={size} />
          <Bunny size={size} />
          <DeferCaseOneFile size={size} />
        </div>

        <div className={classes.insertNote}>
          <p>Open console to see input vs deferred input.</p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<DeferCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
