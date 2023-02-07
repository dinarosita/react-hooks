
import React from "react";
import CustomHookPageAbout from "./CustomHookPageAbout"
// import ExampleCase from "./ExampleCase";
import classes from "../../layout/Page.module.css";
import InputPersistence from "./InputPersistence";
import InputRegular from "./InputRegular";
import { ShowHideProvider } from "../../tools/ToggleContext";
import UseLocalStorageNote from "./notes/UseLocalStorageNote";
import MyInputForm from "./MyInputForm";
import UseUpdateLoggerNote from "./notes/UseUpdateLoggerNote";

export default function CustomHookPage() {
  return (
    <main>
      <CustomHookPageAbout />
      {/* <ExampleCase /> */}

      <section className={classes.hookbox}>
        <h2>useLocalStorage: Input Persistence</h2>
        <div className={classes.cardGroup}>
          <div>
            <h3>Regular input box</h3>
            <InputRegular />
          </div>
          <div>
            <h3>Input box with persistence</h3>
            <InputPersistence />
          </div>
          <div>
            <h3>My form</h3>
            <MyInputForm />
          </div>
        </div>

        <ShowHideProvider>
          <UseLocalStorageNote />
        </ShowHideProvider>
      </section>
      <section className={classes.hookbox}>
        <h2>useUpdateLogger: Logging value changes</h2>
        <p>Open console to see log.</p>
        <ul>
          <li>
            useUpdateLogger without key is used in "Input box with persistence"
            above.
          </li>
          <li>useUpdateLogMine with key is used in "My form" above.</li>
        </ul>
        <ShowHideProvider>
          <UseUpdateLoggerNote />
        </ShowHideProvider>
      </section>
    </main>
  );
}