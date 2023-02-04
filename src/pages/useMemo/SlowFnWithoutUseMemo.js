import React, { useState } from "react";
import classes from "../../layout/Page.module.css";

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
      <h3>Without useMemo</h3>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div className={classes.displaybox}>Doubled: {doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
export default SlowFnWithoutUseMemo;
