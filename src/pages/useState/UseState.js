import IncrementCase from "./IncrementCase";
import PowerCase from "./PowerCase";
import TopSection from "../../layout/TopSection";

import classes from "../Generic.module.css";

function UseStatePage() {
  return (
    <main>
      <TopSection
        hookType="State"
        videoLink="https://www.youtube.com/watch?v=O6P86uwfdR0&t=19s"
        videoTitle="Learn useState in 15 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usestate.html"
      />

      <section className={classes.hookbox}>
        <h2>useState</h2>
        <p>
          This hook create and manage changes of states in React. States is a
          function component variable that trigger rerendering upon changes.
        </p>

        <pre className={classes.formula}>
          const [<span className={classes.var}>state, setState</span>] ={" "}
          <span className={classes.emp}>useState</span>(
          <span className={classes.var}>initialState</span>)
        </pre>
      </section>
      <section className={classes.hookbox}>
        <IncrementCase />
      </section>
      <section className={classes.hookbox}>
        <PowerCase />
      </section>
    </main>
  );
}

export default UseStatePage;
