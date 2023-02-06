import React from "react";
import classes from "../../layout/Global.module.css"
export default function UseCallbackCodes() {
  const title1 = "App.js without useCallback";
  const text1 = String.raw`
import React, { useState } from "react";
import List from "./List.js";

export default function App() {
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
    <div style={theme}>
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
  );
}
`;

    const title2 = "App.js with useCallback";
    const text2 = String.raw`
import React, { useState, useCallback } from "react";
import List from "./List.js";

export default function App() {
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
    <div style={theme}>
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
  );
}
`;

  const title3 = "List.js";
  const text3 = String.raw`
import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);
  
  return (
    <div>
      <p>Number List:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
`;

  return (
    <div className={classes.cardGroup}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}