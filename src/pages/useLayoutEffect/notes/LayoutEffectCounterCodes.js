import React from "react";
import classes from "../../../layout/Page.module.css";

export default function LayoutEffectCounterCodes() {
  const title1 = "useEffect";
  const text1 = String.raw`...

function EffectCounter() {
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
}

...`;
  const title2 = "useLayoutEffect";
  const text2 = String.raw`...

function EffectCounter() {
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
}

...`;

  return (
    <div className={classes.flexbox}>
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
