import React, { useState, useMemo } from "react";
import classes from "../../pages/UseState.module.css";
function SlowFunctionCase() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "cadetblue" : "white",
    color: dark ? "white" : "cadetblue",
  };

  return (
    <div style={themeStyles}>
      <h2>Slow Function with useMemo</h2>
      <p>
        Hook useMemo can be used to memoize the result of such slow function.
        The result is cached. In the next rendering, the dependencies will be
        checked. If they all stayed the same, previously cached result will be
        used. Only if they are different, it will be run. This way, the slow
        function doesn't slow down other processes unnecessarily. Only if
        there's change in dependencies, the slow function is called. Otherwise,
        previous the Hook useMemo is used for caching result of double function.
        Changing theme now can be fast because slow function is not rerendered.
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
export default SlowFunctionCase;
