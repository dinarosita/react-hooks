import classes from "../Generic.module.css";
import TopSection from "../../layout/TopSection";
import { ToggleCodeProvider } from "../../tools/ToggleCodeContext";
import UseDeferredValueNotes from "./notes/UseDeferredValueNotes";
import RegularInput from "./RegularInput";
import DeferredInput from "./DeferredInput";
import { useState } from "react";
import InOneFile from "./InOneFile";

function UseDeferredValuePage() {
  const [size, setSize] = useState(5000);
  function handleSize(e) {
    if (e.target.value > 20000) {
      setSize(20000);
    } else if (e.target.value < 1) {
      setSize(1);
    } else {
      setSize(e.target.value);
    }
  }
  return (
    <main>
      <TopSection
        hookType="DeferredValue"
        videoLink=""
        videoTitle="Learn useDeferredValue in x Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usedeferredvalue.html"
      />

      <section className={classes.hookbox}>
        <h2>Form with regular vs deferred input</h2>

        <p>
          This hook improve sluggishness and responsiveness by bunching up state
          changes together. Say we have input box that capture change every key
          stroke and every change trigger response. This can be unnecessarily
          too frequent. Using <code>useDeferredValue</code>, state changes can
          be collected until it's handy for react to render together. For using,
          just wrap the wanted state like this:
        </p>

        <pre className={classes.formula}>
          const <span className={classes.var}>deferredState</span> = <span className={classes.emp}>useDeferredValue</span>(
          <span className={classes.var}>state</span>)
        </pre>
      </section>

      <section className={classes.hookbox}>
        <label for="size">Enter list size (1-20000): </label>
        <p>Open console to see input vs deferred input.</p>
        <input
          id="size"
          type="number"
          value={size}
          onChange={handleSize}
          style={{ maxWidth: "5rem" }}
        />
        <div className={classes.flexbox}>
          <div>
            <h3>Regular input</h3>
            <RegularInput size={size} />
          </div>
          <div>
            <h3>Deferred input</h3>
            <DeferredInput size={size} />
          </div>
          <div>
            <h3>Deferred input in 1 file</h3>
            <InOneFile size={size} />
          </div>
        </div>

        <ToggleCodeProvider>
          <UseDeferredValueNotes />
        </ToggleCodeProvider>
      </section>
    </main>
  );
}

export default UseDeferredValuePage;
