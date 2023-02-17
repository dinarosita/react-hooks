import React, { useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import TwoStateCaseText from "./TwoStateCaseText";
import useLocalStorage from "../../tools/useLocalStorage";

export default function TwoStateCaseScenario() {
  const [firstName, setFirstName] = useLocalStorage("Dina");
  const [lastName, setLastName] = useState("Rosita");
  return (
    <section className={classes.subsection}>
      <h3>Scenario 1</h3>
      <p></p>
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
      <ShowHideProvider>
        <ShowHideButton textFile=<TwoStateCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
