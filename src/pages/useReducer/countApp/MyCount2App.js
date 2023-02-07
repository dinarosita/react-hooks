import React, { useReducer } from "react";
import classes from "../../../layout/Global.module.css";

function reducer(state, action) {
  return { count: state.count + 2 };
}

function MyCount2App() {
  const [state, dispatch] = useReducer(reducer, { count: 2 });

  function incrementBy2() {
    dispatch();
  }
  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>My Count App: Increment 2</h3>
        <div className={classes.displayMulti}>
          <div>{state.count}</div>
          <button onClick={incrementBy2}>+2</button>
        </div>
      </div>
    </div>
  );
}

export default MyCount2App;
