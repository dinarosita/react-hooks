import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import PopupText from "./PopupText";
import PopupEffect from "./PopupEffect";
import PopupLayoutEffect from "./PopupLayoutEffect";
import PopupWithoutEffect from "./PopupWithoutEffect";

export default function PopupCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Popup Layout</h2>
        <React.StrictMode>
          <div className={classes.cardGroup}>
            <PopupEffect />
            <PopupLayoutEffect />
            <PopupWithoutEffect />
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
          <ShowHideButton textFile=<PopupText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
