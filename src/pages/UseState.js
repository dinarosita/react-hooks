import UseStateIncPage from "./UseStateInc";
import UseStatePowPage from "./UseStatePow";

import classes from "./UseState.module.css";

function UseStatePage() {
  return (
    <section>
      <h1>useState</h1>
      <ul>
        <li>
          Guide:{" "}
          <a href="https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=1">
            WebDev - Learn useState in 15 Minutes
          </a>
        </li>
        <li>
          Note:{" "}
          <a href="https://dinarosita.github.io/codeyluwak/react_usestate.html">
            CodeyLuwak - React useState
          </a>
        </li>
        <li>App: coding/reactjs/react-hooks</li>
        <li>
          File:
          <ul>
            <li>src/pages/UseStateInc.js</li>
            <li>src/pages/UseStatePow.js</li>
          </ul>
        </li>
      </ul>
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
