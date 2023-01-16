import UseStateIncPage from "./UseStateInc";
import UseStatePowPage from "./UseStatePow";
import Body from "../components/layout/Body";

import classes from "./UseState.module.css";

function UseStatePage() {
  return (
    <section>
      <Body
        hookType="State"
        videoLink="https://www.youtube.com/watch?v=O6P86uwfdR0&t=19s"
        videoTitle="Learn useState in 15 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usestate.html"
      />

      <div className={classes.hookbox}>
        <UseStateIncPage />
      </div>
      <div className={classes.hookbox}>
        <UseStatePowPage />
      </div>
    </section>
  );
}

export default UseStatePage;
