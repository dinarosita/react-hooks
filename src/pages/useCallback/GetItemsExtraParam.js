import React, { useCallback, useState } from "react";
import classes from "../../layout/Page.module.css";
import ListExtraParam from "./ListExtraParam";

export default function GetItemsExtraParam() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((inc) => {
    return [number + inc, number + 1 + inc, number + 2 + inc];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "slategray" : "white",
    color: dark ? "white" : "slategray",
  };

  return (
    <div>
      <h3>With extra parameter</h3>

      <div style={theme} className={classes.borderedbox}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />

        <ListExtraParam getItems={getItems} />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
      </div>
    </div>
  );
}
