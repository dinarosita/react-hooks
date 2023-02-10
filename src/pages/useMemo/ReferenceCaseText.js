import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function ReferenceCaseText() {
  const title1 = "Plain";
  const text1 = String.raw`export default function ReferenceCasePlain() {
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
    <div style={themeStyles}>
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
  );
}`;
  const title2 = "useMemo";
  const text2 = String.raw`export default function ReferenceCaseUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "mistyrose" : "white",
      color: dark ? "indianred" : "cadetblue",
    };
  }, [dark]);

  const renderCount = useRef(1);

  useEffect(() => {
    console.log("theme changed");
    renderCount.current = renderCount.current + 1;
  }, [themeStyles]);

  return (
    <div style={themeStyles}>
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
  );
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
