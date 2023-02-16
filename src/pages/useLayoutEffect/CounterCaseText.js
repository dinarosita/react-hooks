import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CounterCaseText() {
  const title1 = "useEffect";
  const text1 = String.raw`function CounterCaseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}`;
  const title2 = "useLayoutEffect";
  const text2 = String.raw`function CounterCaseEffect() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}`;

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
    </div>
  );
}
