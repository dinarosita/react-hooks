import React from "react";
import classes from "../../layout/Page.module.css";
import InputPersistence from "./InputPersistence";
import InputRegular from "./InputRegular";
import { ShowHideProvider } from "../../tools/ToggleContext";
import UseLocalStorageNote from "./notes/UseLocalStorageNote";
import MyInputForm from "./MyInputForm";
import UseUpdateLoggerNote from "./notes/UseUpdateLoggerNote";

export default function CustomHooksPage() {
  return (
    <main>
      <section className={classes.hookbox}>
        <h1>Custom Hooks</h1>
        <ul>
          <li>
            <a
              href="https://youtu.be/6ThXsUwLWvc?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebDev — Learn Custom Hooks in 10 Minutes
            </a>
          </li>
          <li>
            <a
              href="https://dinarosita.github.io/codeyluwak/react_customhooks.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeyLuwak — React Custom Hooks
            </a>
          </li>
          <li>
            Folder — coding/reactjs/<b>react-hooks</b>/src/pages/
            <b>customhooks</b>
          </li>
        </ul>
      </section>

      <section className={classes.hookbox}>
        <h2>useLocalStorage: Input Persistence</h2>
        <div className={classes.flexbox}>
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
