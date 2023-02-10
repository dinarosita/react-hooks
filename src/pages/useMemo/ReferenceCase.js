import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ReferenceCasePlain from "./ReferenceCasePlain";
import ReferenceCaseText from "./ReferenceCaseText";
import ReferenceCaseUseMemo from "./ReferenceCaseUseMemo";

export default function ReferenceCase() {
  return (
    <section className={classes.mainsection}>
      
        <h2>Reference Case</h2>
        <div>
          <ReferenceCasePlain />
          <ReferenceCaseUseMemo />
        </div>

        <ShowHideProvider>
          <ShowHideButton textFile=<ReferenceCaseText /> />
        </ShowHideProvider>
 </section>
  );
}
