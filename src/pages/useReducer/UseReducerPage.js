
import React from "react";
import UseReducerPageAbout from "./UseReducerPageAbout"
import CountCase from "./CountCase";
import TodoCase from "./TodoCase";

export default function UseReducerPage() {
  return (
    <main>
      <UseReducerPageAbout />
      <TodoCase />
      <CountCase />
    </main>
  );
}