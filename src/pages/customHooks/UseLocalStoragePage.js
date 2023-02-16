import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import UseLocalStoragePageText from "./UseLocalStoragePageText";
import InputFormMine from "./InputFormMine";
import InputFormRegular from "./InputFormRegular";
import InputFormPersistence from "./InputFormPersistence";

export default function UseLocalStoragePage() {
  return (
    <section className={classes.mainsection}>
      <h2>useLocalStorage</h2>
      <p className={classes.tagline}>Input Persistence</p>
      <div className={classes.hFlex}>
        <InputFormRegular />
        <InputFormPersistence />
        <InputFormMine />
      </div>

      <ShowHideProvider>
        <ShowHideButton textFile=<UseLocalStoragePageText /> />
      </ShowHideProvider>
    </section>
  );
}
