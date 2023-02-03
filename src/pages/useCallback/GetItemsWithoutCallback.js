import React, { useState } from "react";
import classes from "../Generic.module.css";
import List from "./List.js";

export default function GetItemsWithoutCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "slategray" : "white",
    color: dark ? "white" : "slategray",
  };

  return (
    <div>
      <h3>Without useCallback</h3>

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
