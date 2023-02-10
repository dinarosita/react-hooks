import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseReducerPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        useReducer is like useState, that it manages states and rerender
        component whenever the state changes. useReducer gives more concrete way
        to handle more complex function. useReducer has very similar pattern and
        use with redux, but it takes away a lot of boiler plate from redux.
      </p>
      <p>
        The coding is more complex , but it gives a lot of control to the state.
        Changes can occur only in listed type of actions.
      </p>

      <pre className={classes.formula}>
        const [<span className={fc.var}>state</span>,{" "}
        <span className={fc.fn}>dispatch</span>] ={" "}
        <span className={fc.foc}>
          useReducer(<span className={fc.fn}>reducer</span>,{" "}
          <span className={fc.val}>initialValue</span>)
        </span>
      </pre>
    </div>
  );
}
