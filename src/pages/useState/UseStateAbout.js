import React from "react";
import About from "../../layout/About";
import UseStateMainNote from "./UseStateMainNote";

export default function UseStateAbout() {
  return (
    <About
      hookName="useState"
      tagline="Create state and manage its updates"
      notes=<UseStateMainNote />
      videoLink="https://www.youtube.com/watch?v=O6P86uwfdR0&t=19s"
    />
  );
}
