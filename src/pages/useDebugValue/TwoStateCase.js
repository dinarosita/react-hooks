import React, { useState } from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";

import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import TwoStateCaseText from "./TwoStateCaseText";
import useLocalStorage from "../../tools/useLocalStorage";

export default function TwoStateCase() {
  const [firstName, setFirstName] = useLocalStorage("Dina");
  const [lastName, setLastName] = useState("Rosita");
  return (
    <section className={classes.mainsection}>
      <h2>Two Input Case</h2>
      <p>
        Here we have a very simple form with 2 input box. First name box is
        using custom hook useLocalStorage, and the last name is using regular
        useState.
      </p>

      <div className={classes.scriptrun}>
        <div>
          First:{" "}
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          Last:{" "}
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <p className={classes.feedbackTitle}>DevTool Components tab:</p>
      <pre className={classes.feedback}>
        <span className={fc.block}>useLocalStorage: "{firstName}"
        <br />
        useState: "{lastName}"</span>
      </pre>
      <ShowHideProvider>
        <ShowHideButton textFile=<TwoStateCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
