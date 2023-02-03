import React, { useState, useMemo, useEffect, useRef } from "react";
import classes from "../../pages/Generic.module.css";

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
      <h3>With useMemo</h3>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div className={classes.displaybox}>Doubled: {doubleNumber}</div>
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
