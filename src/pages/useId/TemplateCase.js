import React from "react";
import classes from "../../styles/Global.module.css";
import TemplateCaseScenario from "./TemplateCaseScenario";
import TemplateCaseText from "./TemplateCaseText";

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
