import React from "react";
import About from "../../layout/About"
import UseReducerPageMainNote from "./UseReducerPageMainNote"

export default function UseReducerPageAbout() {
  return (
    <About
      hookName="useReducer"
      tagline="Store and update states like useState, but with more control"
      notes=<UseReducerPageMainNote />
      videoLink="https://www.youtube.com/watch?v=kK_Wqx3RnHk&t=51s"
    />
  );
}
