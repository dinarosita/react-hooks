import React, { useState, useMemo } from "react";
import classes from "../../layout/Global.module.css";

export default function SlowFunctionCaseUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "cadetblue",
  };

  return (
    <div className={classes.cardItem} style={themeStyles}>
      <div className={classes.niceFlow}>
        <h3>useMemo</h3>
        <div className={classes.insertNote}>
          <p>
            Double number is a slow function that is memoized. Changing theme is
            now fast because double number doesn't rerendered.
          </p>
        </div>
        <div className={classes.displayMulti}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <div>Doubled: {doubleNumber}</div>
        </div>
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
      </div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
