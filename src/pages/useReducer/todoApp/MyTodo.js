import React from "react";
import { ACTIONS } from "./MyTodoApp";

export default function MyTodo({ todo, dispatch }) {
  return (
    <li>
      <div style={{ color: todo.complete ? "lightblue" : "slategray" }}>
        {todo.task}
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
}
