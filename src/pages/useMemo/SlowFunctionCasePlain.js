import React, { useState } from "react";
import classes from "../../styles/Global.module.css";

export default function SlowFunctionCasePlain() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "cadetblue",
  };
  return (
    <section className={classes.subsection}>
      <h3>Plain</h3>
      <div className={classes.insertNote}>
        <p>
          Double number is a slow function that is not memoized. Changing theme
          is also slow because double number gets rerendered.
        </p>
      </div>
      <div className={classes.scriptrun} style={themeStyles}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <div>Doubled: {doubleNumber}</div>
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
      </div>
    </section>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
