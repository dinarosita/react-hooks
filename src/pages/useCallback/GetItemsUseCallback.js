import React, { useCallback, useState } from "react";
import classes from "../../layout/Page.module.css";
import List from "./List.js";

export default function GetItemsUseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "slategray" : "white",
    color: dark ? "white" : "slategray",
  };

  return (
    <div>
      <h3>With useCallback</h3>

      <div style={theme} className={classes.borderedbox}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />

        <List getItems={getItems} />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
      </div>
    </div>
  );
}
