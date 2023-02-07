import React from "react";
import classes from "../../layout/Global.module.css";

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
        const [<span className={classes.variable}>state</span>,{" "}
        <span className={classes.variable}>dispatch</span>] ={" "}
        <span className={classes.thehook}>
          useReducer(<span className={classes.func}>reducer</span>,{" "}
          <span className={classes.value}>initialValue</span>)
        </span>
      </pre>
      <p className={classes.footage}>
        <a
          href="https://dinarosita.github.io/codeyluwak/react_usereducer.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more in Codeyluwak
        </a>
      </p>
    </div>
  );
}
