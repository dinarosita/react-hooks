import React, { useReducer } from "react";
import classes from "../../../layout/Global.module.css";

const ACTIONS = {
  DECREMENT_BY3: "decrementBy3",
  INCREMENT_BY3: "incrementBy3",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT_BY3:
      return { count: state.count - 3 };
    case ACTIONS.INCREMENT_BY3:
      return { count: state.count + 3 };
    default:
      return state;
  }
}

function MyCount4App() {
  const [state, dispatch] = useReducer(reducer, { count: 3 });

  function decrementBy3() {
    dispatch({ type: ACTIONS.DECREMENT_BY3 });
  }

  function incrementBy3() {
    dispatch({ type: ACTIONS.INCREMENT_BY3 });
  }

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>My Count App: Increment 2</h3>
        <div className={classes.displayMulti}>
          <button onClick={decrementBy3}>-3</button>
          <div>{state.count}</div>
          <button onClick={incrementBy3}>+3</button>
        </div>
      </div>
    </div>
  );
}

export default MyCount4App;
