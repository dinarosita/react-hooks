import React, { useReducer } from "react";

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
    <>
      <h4>Increment Decrement 3</h4>
      <button onClick={decrementBy3}>-3</button> {state.count}{" "}
      <button onClick={incrementBy3}>+3</button>
    </>
  );
}

export default MyCount4App;
