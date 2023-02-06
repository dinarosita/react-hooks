import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ReferenceCasePlain from "./ReferenceCasePlain";
import ReferenceCaseText from "./ReferenceCaseText";
import ReferenceCaseUseMemo from "./ReferenceCaseUseMemo";

export default function ReferenceCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Reference Case</h2>
        <div className={classes.cardGroup}>
          <ReferenceCasePlain />
          <ReferenceCaseUseMemo />
        </div>

        <ShowHideProvider>
          <ShowHideButton textFile=<ReferenceCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
