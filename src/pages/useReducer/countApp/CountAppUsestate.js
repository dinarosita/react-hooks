import React, { useState } from "react";
import classes from "../../../layout/Global.module.css";

function CountAppUsestate() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>Count App useState</h3>
        <div className={classes.displayMulti}>
          <button onClick={decrement}>-</button> <div>{number}</div>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CountAppUsestate;
