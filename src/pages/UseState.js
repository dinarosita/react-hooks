import { useEffect, useState } from "react";
import classes from "./UseState.module.css";

function UseStatePage() {
  const [count, setCount] = useState(4);
  const [action, setAction] = useState("Click to start");
  const [power, setPower] = useState(2);
  const [label, setLabel] = useState("Click to start");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setAction("Going down");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setAction("Going up");
  }

  function startPower() {
    setPower(2);
    setLabel("Refreshed to 2");
  }

  function upPower() {
    setPower((prevPower) => prevPower * prevPower);
    setLabel("Power up");
  }
  console.log("rendered");

  useEffect(() => {
    console.log("Power changed!")
  }, [power])
 

  return (
    <section>
      <h1>useState</h1>
      <ul>
        <li>Guide: <a href="https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=1">
            WebDev - Learn useState in 15 Minutes
          </a>
        </li>
        <li>Note: <a href="https://dinarosita.github.io/codeyluwak/react_usestate.html">
            CodeyLuwak - React useState
          </a>
        </li>
        <li>App: coding/reactjs/react-hooks</li>
        <li>File: src/pages/useState.js</li>
      </ul>
      <div className={classes.hookbox}>
        <button onClick={decrementCount}>-</button>
        <span>
          {count}
        </span>
        <button onClick={incrementCount}>+</button>
        <p>{action}</p>
      </div>
      <div className={classes.hookbox}>
        <button onClick={startPower}>Start over</button>
        <span>
          {power}
        </span>
        <button onClick={upPower}>Power up</button>
        <p>{label}</p>
      </div>
    </section>
  );
}

export default UseStatePage;
