import React, { useReducer } from "react";
import classes from "../../../layout/Global.module.css";

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

export default function CountApp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>Count App</h3>
        <div className={classes.displayMulti}>
          <button onClick={decrement}>-</button>
          <div>{state.count}</div>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
