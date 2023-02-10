import React, { useCallback, useState } from "react";
import classes from "../../styles/Global.module.css";
import GetCaseList from "./GetCaseList.js";

export default function GetCaseUseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "slategray",
  };

  return (
    <section className={classes.subsection}>
      <h3>With useCallback</h3>
      <div className={classes.scriptrun} style={theme}>
        {" "}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <GetCaseList getItems={getItems} />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
      </div>
    </section>
  );
}
