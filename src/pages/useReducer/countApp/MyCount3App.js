import React, { useReducer } from "react";
import classes from "../../../styles/Global.module.css";

const ACTIONS = {
  ZERO: "zero",
  INCREMENT_BY3: "incrementBy3",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ZERO:
      return { count: 0 };
    case ACTIONS.INCREMENT_BY2:
      return { count: state.count + 2 };
    default:
      return state;
  }
}

function MyCount3App() {
  const [state, dispatch] = useReducer(reducer, { count: 2 });

  function zero() {
    dispatch({ type: ACTIONS.ZERO });
  }

  function incrementBy2() {
    dispatch({ type: ACTIONS.INCREMENT_BY2 });
  }

  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>My Count App: Increment 2</p>
      <div className={classes.hFlex}>
        <button onClick={zero}>0</button>
        <div>{state.count}</div>
        <button onClick={incrementBy2}>+2</button>
      </div>
    </div>
  );
}

export default MyCount3App;
