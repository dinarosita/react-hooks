import React from "react";
import classes from "../../layout/Global.module.css";

export default function CounterText() {
  const title1 = "useEffect";
  const text1 = String.raw`function CounterEffect() {
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
  const text2 = String.raw`function CounterEffect() {
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
    <div className={classes.cardGroup}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
