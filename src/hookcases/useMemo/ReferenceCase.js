import React, { useState, useMemo, useEffect, useRef } from "react";
import classes from "../../pages/UseState.module.css";

function ReferenceCase() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "cadetblue" : "white",
      color: dark ? "white" : "cadetblue",
    };
  }, [dark]);

  const renderCount = useRef(1)

  useEffect(() => {
    console.log("theme changed");
    renderCount.current = renderCount.current + 1;
  }, [themeStyles]);
  return (
    <div style={themeStyles}>
      <h2>Referential Variable with useMemo</h2>
      <p>Hook useMemo can be used to remember the last rendering result of the dependencies. In this case, the value itself, not just the reference. If the value stays the same, the cached result will be used. Otherwise, it will be rerendered.</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div className={classes.displayBox}>Doubled: {doubleNumber}</div>
      <p>Theme render count: {renderCount.current}</p>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
export default ReferenceCase;
