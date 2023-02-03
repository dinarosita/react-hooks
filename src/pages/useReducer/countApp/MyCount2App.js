import React, { useReducer } from "react";

function reducer(state, action) {
    return {count: state.count +2}
}

function MyCount2App() {
    const [state, dispatch] = useReducer(reducer, {count: 2})

    function incrementBy2() {
        dispatch()
    }
  return (
    <>
      <h4>Increment 2</h4>
      {state.count} <button onClick={incrementBy2}>+2</button>
    </>
  );
}

export default MyCount2App;
