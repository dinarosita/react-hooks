import React from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import MyTodoApp from "./todoApp/MyTodoApp";
import TodoApp from "./todoApp/TodoApp";
import TodoCaseText from "./TodoCaseText";

export default function TodoCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Todo Case</h2>
      <div className={classes.hFlex}>
        <TodoApp />
        <MyTodoApp />
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<TodoCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
