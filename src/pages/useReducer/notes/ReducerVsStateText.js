import React from "react";
import classes from "../../../pages/Generic.module.css";

function ReducerVsStateText() {
  const title1 = "Using useReducer";
  const text1 = String.raw`
import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CountApp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
      <button onClick={decrement}>-</button> {state.count}{" "}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CountApp;
`;
  const title2 = "Using useState";
  const text2 = String.raw`
import React, { useState } from "react";

function CountAppUsestate() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button> {number}{" "}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CountAppUsestate;
`;

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

export default ReducerVsStateText;
