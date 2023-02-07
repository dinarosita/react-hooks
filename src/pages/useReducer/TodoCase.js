import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import MyTodoApp from "./todoApp/MyTodoApp";
import TodoApp from "./todoApp/TodoApp";
import TodoCaseText from "./TodoCaseText";


export default function TodoCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Todo Case</h2>
        <div className={classes.cardGroup}>
          <TodoApp />
          <MyTodoApp />
        </div>

        <div className={classes.insertNote}>
          <p>Note</p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<TodoCaseText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
