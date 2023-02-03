import React, { useReducer, useState } from "react";
import MyTodo2 from "./MyTodo2";
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
  return {
    id: Date.now(),
    task: task,
    complete: false,
  };
}

export default function MyTodoApp2() {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    setTask("");
  }
  return (
    <div onSubmit={handleSubmit} className={classes.todo}>
      <h3>My Todo App 2</h3>
      <form>
        <input
          type="text"
          value={task}
          placeholder="Enter new task"
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <div>
        <h3>Todo List</h3>
        <p>Currently adding: {task}</p>
        <ul>
          {todos.map((todo) => (
            <MyTodo2 key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    </div>
  );
}
