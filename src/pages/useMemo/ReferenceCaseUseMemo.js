import React, { useState, useMemo, useEffect, useRef } from "react";
import classes from "../../layout/Global.module.css";

export default function ReferenceCaseUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "mistyrose" : "white",
      color: dark ? "indianred" : "cadetblue",
    };
  }, [dark]);

  const renderCount = useRef(1);

  useEffect(() => {
    console.log("theme changed");
    renderCount.current = renderCount.current + 1;
  }, [themeStyles]);
  
  return (
    <div className={classes.cardItem} style={themeStyles}>
      <div className={classes.niceFlow}>
        <h3>With useMemo</h3>
        <div className={classes.insertNote}>
          <p>
            themeStyles is an object variable.Using useMemo, it doesn't get
            rerendered when changing number.
          </p>
        </div>
        <div className={classes.displayMulti}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <div>Doubled: {number * 2}</div>
        </div>
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div>Theme render count: {renderCount.current}</div>
      </div>
    </div>
  );
}