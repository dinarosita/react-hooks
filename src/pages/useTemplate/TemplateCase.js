import React from "react";
import classes from "../../styles/Global.module.css";
import TemplateCaseScenario from "./TemplateCaseScenario";
import TemplateCaseText from "./TemplateCaseText";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";

export default function TemplateCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Title</h2>
      <p>Text</p>
      <TemplateCaseScenario />
      <ShowHideProvider>
        <ShowHideButton textFile=<TemplateCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
