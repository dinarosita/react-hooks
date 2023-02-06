import React, { useCallback, useState } from "react";
import classes from "../../layout/Global.module.css";
import GetCaseListParam from "./GetCaseListParam";

export default function GetCaseParam() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (inc) => {
      return [number + inc, number + 1 + inc, number + 2 + inc];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "slategray",
  };

  return (
    <div className={classes.cardItem} style={theme} >
      <div className={classes.niceFlow}>
        {" "}
        <h3>With extra parameter</h3>
        <div>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />

          <GetCaseListParam getItems={getItems} />
          <button onClick={() => setDark((prevDark) => !prevDark)}>
            Toggle theme
          </button>
        </div>
      </div>
    </div>
  );
}
