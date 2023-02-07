import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import UseLocalStoragePageText from "./UseLocalStoragePageText";
import InputFormMine from "./InputFormMine";
import InputFormRegular from "./InputFormRegular";
import InputFormPersistence from "./InputFormPersistence";


export default function UseLocalStoragePage() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>useLocalStorage</h2>
        <p className={classes.tagline}>Input Persistence</p>
        <div className={classes.cardGroup}>
          <InputFormRegular />
          <InputFormPersistence />
          <InputFormMine />
        </div>

        <div className={classes.insertNote}>
          <p>Note</p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<UseLocalStoragePageText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
