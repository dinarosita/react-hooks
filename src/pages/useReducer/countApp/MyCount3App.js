import React, { useReducer } from "react";

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
    <>
      <h4>Zero & Increment 2</h4>
      <button onClick={zero}>0</button> {state.count}{" "}
      <button onClick={incrementBy2}>+2</button>
    </>
  );
}

export default MyCount3App;
