import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ShowHideCaseText from "./ShowHideCaseText";

export default function ShowHideCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Show/Hide Toggle Button</h2>

      <p>
        All show/hide code button in this app is made using one same{" "}
        <code>useContext</code> app. Like this one right here:
      </p>
      <ShowHideProvider>
        <ShowHideButton textFile=<ShowHideCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
