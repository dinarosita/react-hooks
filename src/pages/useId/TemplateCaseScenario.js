import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import TemplateCaseText from "./TemplateCaseText";

export default function TemplateCaseScenario() {
  return (
    <section className={classes.subsection}>
      <h3>Title</h3>
      <p>Text</p>
      <div className={classes.scriptrun}></div>
      <ShowHideProvider>
        <ShowHideButton textFile=<TemplateCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
