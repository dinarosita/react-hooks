import React, { useState } from "react";
import classes from "../../pages/UseState.module.css";

function SlowFnWithoutUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "cadetblue" : "white",
    color: dark ? "white" : "cadetblue",
  };
  return (
    <div style={themeStyles}>
      <h2>Slow Function without useMemo</h2>
      <p>
        Double number function is made slow. WHen number is changed, rendering will be slow. Changing theme alone is fast, however since everything got rerendered, and double function is slow, changing theme becoming slow too.
      </p>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div className={classes.displayBox}>Doubled: {doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
export default SlowFnWithoutUseMemo;
