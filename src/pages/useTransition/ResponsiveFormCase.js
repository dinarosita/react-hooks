import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ResponsiveFormCaseMine from "./ResponsiveFormCaseMine";
import ResponsiveFormCaseSluggish from "./ResponsiveFormCaseSluggish";
import ResponsiveFormCaseText from "./ResponsiveFormCaseText";
import ResponsiveFormCaseUseTransition from "./ResponsiveFormCaseUseTransition";

export default function ResponsiveFormCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Responsive Form when Updating a Long List</h2>
        <p>
          Your page user will run away if an input box doesn't directly show
          back what they are typing in. In other word, sluggish. Not responsive.
          And this will happen if there's another rendering that takes long
          time. Solution, use useTransition to give higher priority to the input
          box update, and the slow process can be rendered and finish in their
          own time.
        </p>
      <div className={classes.hFlex}>
        <ResponsiveFormCaseSluggish />
        <ResponsiveFormCaseUseTransition />
        <ResponsiveFormCaseMine />
      </div>
      <p>Try typing 2 sentences to see the effect.</p>

      <ShowHideProvider>
        <ShowHideButton textFile=<ResponsiveFormCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
