import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import PopupCaseText from "./PopupCaseText";
import PopupCaseEffect from "./PopupCaseEffect";
import PopupCaseLayoutEffect from "./PopupCaseLayoutEffect";
import PopupCaseWithoutEffect from "./PopupCaseWithoutEffect";

export default function PopupCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Popup Layout Case</h2>
        <React.StrictMode>
          <div className={classes.cardGroup}>
            <PopupCaseEffect />
            <PopupCaseLayoutEffect />
            <PopupCaseWithoutEffect />
          </div>
          
        </React.StrictMode>
        <div className={classes.insertNote}>
          <p>
            Refresh page to see the lagged effect when useEffect is used instead
            of useLayoutEffect. Button without effect is included for
            comparison.
          </p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<PopupCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
