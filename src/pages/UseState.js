import IncrementCase from "../hookcases/useState/IncrementCase";
import PowerCase from "../hookcases/useState/PowerCase";
import TopSection from "../layout/TopSection";

import classes from "./UseState.module.css";

function UseStatePage() {
  return (
    <main>
      <TopSection
        hookType="State"
        videoLink="https://www.youtube.com/watch?v=O6P86uwfdR0&t=19s"
        videoTitle="Learn useState in 15 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usestate.html"
      />

      <div className={classes.hookbox}>
        <IncrementCase />
      </div>
      <div className={classes.hookbox}>
        <PowerCase />
      </div>
    </main>
  );
}

export default UseStatePage;
