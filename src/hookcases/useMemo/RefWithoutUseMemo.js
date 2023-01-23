import React, { useState, useMemo, useEffect, useRef } from "react";
import classes from "../../pages/UseState.module.css";

function RefWithoutUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "cadetblue" : "white",
    color: dark ? "white" : "cadetblue",
  };

  const renderCount = useRef(1)

  useEffect(() => {
    console.log("theme changed");
    renderCount.current = renderCount.current + 1;
  }, [themeStyles]);
  return (
    <div style={themeStyles}>
      <h2>Referential Variable without useMemo</h2>
      <p>
        Even when triggered by number change, theme is considered changing too. This is because themeStyles is an object variable, and the value is actually just the reference to the place where the value located. 
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
      <p>Theme render count: {renderCount.current}</p>
      <p>The render counter come with warning: The 'themeStyles' object makes the dependencies of useEffect Hook (at line 19) change on every render. To fix this, wrap the initialization of 'themeStyles' in its own useMemo() Hook.</p>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
export default RefWithoutUseMemo;
