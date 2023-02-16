import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function GetCaseText() {
  const title1 = "App.js plain";
  const text1 = String.raw`import GetCaseList from "./GetCaseList.js";

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
    <div style={theme}>
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
  );
}`;

  const title2 = "App.js useCallback";
  const text2 = String.raw`import GetCaseList from "./GetCaseList.js";

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
    <div style={theme}>
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
  );
}`;

  const title3 = "List.js";
  const text3 = String.raw`export default function GetCaseList({ getItems }) {
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
    <div className={classes.hFlex}>
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title3}</pre>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
