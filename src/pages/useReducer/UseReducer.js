import classes from "../Generic.module.css";
import TopSection from "../../layout/TopSection";
import CountApp from "./countApp/CountApp";
import CountAppUsestate from "./countApp/CountAppUsestate";
import { ToggleCodeProvider } from "../../tools/ToggleCodeContext";
import ReducerVsStateButton from "./notes/ReducerVsStateButton";
import MyCount2App from "./countApp/MyCount2App";
import MyCount3App from "./countApp/MyCount3App";
import MyCount4App from "./countApp/MyCount4App";
import TodoApp from "./todoApp/TodoApp";
import MyTodoApp from "./todoApp/MyTodoApp";
import MyTodoApp2 from "./todoApp/MyTodoApp2";

export default function UseReducerPage() {
  return (
    <main>
      <TopSection
        hookType="Reducer"
        videoLink="https://www.youtube.com/watch?v=kK_Wqx3RnHk&t=51s"
        videoTitle="Learn useReducer in 20 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usereducer.html"
      />

      <div className={classes.hookbox}>
        <h2>To Do List</h2>
        <div className={classes.flexbox}>
          <div>
            <h3>Todo App</h3>
            <TodoApp />
          </div>
        </div>
        <div className={classes.spacer} />
        <h3>Make my own</h3>
        <div className={classes.flexbox}>
          <div>
            <MyTodoApp />
          </div>
          <div>
            <MyTodoApp2 />
          </div>
        </div>
      </div>

      <div className={classes.hookbox}>
        <h2>Increment & Decrement</h2>

        <div className={classes.flexbox}>
          <div>
            <h3>Using useReducer</h3>
            <CountApp />
          </div>
          <div>
            <h3>Using useState</h3>
            <CountAppUsestate />
          </div>
        </div>

        <ToggleCodeProvider>
          <ReducerVsStateButton />
        </ToggleCodeProvider>

        <div className={classes.spacer} />
        <h3>Make my own</h3>
        <div className={classes.flexbox}>
          <div>
            <MyCount2App />
          </div>
          <div>
            <MyCount3App />
          </div>
          <div>
            <MyCount4App />
          </div>
        </div>
      </div>
    </main>
  );
}
