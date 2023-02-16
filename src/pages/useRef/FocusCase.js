import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import FocusCaseMistake from "./FocusCaseMistake";
import FocusCaseUseRef from "./FocusCaseUseRef";
import FocusCaseText from "./FocusCaseText";

export default function FocusCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Focus on Input</h2>

      <p>In a form, useRef can handily used to focus on certain input.</p>
      <p className={classes.paraTitle}>
        useRef doesn't change the state value.
      </p>
      <p>
        Common mistake here is to use focus value and expect the state to
        change. See how the the name in the feedback line doesn't actually get
        changed into "Focus value" in the mistake illustration above. Similarly,
        don't use it for appendChild/removeChild etc either, use React and
        actual JSX for that.
      </p>
      <div>
        <FocusCaseUseRef />
        <FocusCaseMistake />
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<FocusCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
