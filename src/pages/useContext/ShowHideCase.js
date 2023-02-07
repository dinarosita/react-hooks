import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ShowHideCaseText from "./ShowHideCaseText";

export default function ShowHideCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Show/Hide Toggle Button</h2>

        <div className={classes.insertNote}>
          <p>All show/hide code button in this app is made using one same <code>useContext</code> app. Like this one right here:</p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<ShowHideCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
