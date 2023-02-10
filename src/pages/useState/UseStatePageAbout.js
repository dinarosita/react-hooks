import React from "react";
import About from "../../layout/About";
import UseStatePageMainNote from "./UseStatePageMainNote";

export default function UseStatePageAbout() {
  return (
    <About
      hookName="useState"
      tagline="Add a state variable to component and manage its updates"
      notes=<UseStatePageMainNote />
      videoLink="https://www.youtube.com/watch?v=O6P86uwfdR0&t=19s"
    />
  );
}
