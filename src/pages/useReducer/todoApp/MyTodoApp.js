import React, { useReducer, useState } from "react";
import MyTodo from "./MyTodo";
import classes from "./Todo.module.css";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTask(action.payload.task)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTask(task) {
  return { id: Date.now(), task: task, complete: false };
}

export default function MyTodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    setTask("");
  }
  return (
    <div className={classes.todo}>
      <h3>My Todo App 1</h3>
      <form onSubmit={handleSubmit}>
        <label for="addTask">Add new task: </label>
        <input
          id="addTask"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <div>
        <h4>Todo List</h4>
        <ol>
          {todos.map((todo) => {
            return <MyTodo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </ol>
      </div>
    </div>
  );
}
