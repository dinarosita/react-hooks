import React, { useState } from "react";
import classes from "../../../styles/Global.module.css";

function CountAppUsestate() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>Count App useState</p>
      <div className={classes.hFlex}>
        <button onClick={decrement}>-</button> <div>{number}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default CountAppUsestate;
