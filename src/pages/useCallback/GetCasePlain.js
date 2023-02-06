import React, { useState } from "react";
import classes from "../../layout/Global.module.css";
import GetCaseList from "./GetCaseList.js";

export default function GetCasePlain() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "slategray",
  };

  return (
    <div className={classes.cardItem} style={theme}>
      <div className={classes.niceFlow}>
        <h3>Without useCallback</h3>

        <div>
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
      </div>
    </div>
  );
}
