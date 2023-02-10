import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function SlowFunctionCaseText() {
  const title1 = "Plain";
  const text1 = String.raw`export default function SlowFunctionCasePlain() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);

  const themeStyles = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "cadetblue",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>Doubled: {doubleNumber}</div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}`;
  const title2 = "useMemo";
  const text2 = String.raw`export default function SlowFunctionCaseUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "mistyrose" : "white",
    color: dark ? "indianred" : "cadetblue",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>Doubled: {doubleNumber}</div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}`;

  return (
    <div className={classes.horizontalFlex}>
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
