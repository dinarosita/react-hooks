import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CompareCaseApp from "./CompareCaseApp";
import CompareCaseText from "./CompareCaseText";

export default function CompareCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Compare Case: Function vs Class</h2>
        <div className={classes.insertNote}>
          <p>
            Before there's useContext hook, context are achieved using class
            component. Compare the codes. Class context component coding is
            multilayered and much more complicated than function contect
            component.
          </p>
        </div>
        <div className={classes.cardGroup}>
          <CompareCaseApp />
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<CompareCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
