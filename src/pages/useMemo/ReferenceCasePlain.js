import React, { useState, useEffect, useRef } from "react";
import classes from "../../styles/Global.module.css";

export default function ReferenceCasePlain() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "cadetblue",
  };

  const renderCount = useRef(1);

  useEffect(() => {
    console.log("theme changed");
    renderCount.current = renderCount.current + 1;
  }, [themeStyles]);

  return (
    <section className={classes.subsection}>
      <h3>Plain</h3>
        <p>
          themeStyles is an object variable.Without useMemo, it gets rerendered
          when changing number.
        </p>
      <div className={classes.scriptrun} style={themeStyles}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <div>Doubled: {number * 2}</div>
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div>Theme render count: {renderCount.current}</div>
      </div>
    </section>
  );
}
