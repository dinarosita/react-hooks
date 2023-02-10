import React, { useReducer } from "react";
import classes from "../../../styles/Global.module.css";

function reducer(state, action) {
  return { count: state.count + 2 };
}

function MyCount2App() {
  const [state, dispatch] = useReducer(reducer, { count: 2 });

  function incrementBy2() {
    dispatch();
  }
  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>My Count App: Increment 2</p>
      <div className={classes.horizontalFlex}>
        <div>{state.count}</div>
        <button onClick={incrementBy2}>+2</button>
      </div>
    </div>
  );
}

export default MyCount2App;
