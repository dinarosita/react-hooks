import React from "react";
import About from "../../layout/About";
import UseEffectPageMainNote from "./UseEffectPageMainNote";

export default function UseEffectPageAbout() {
  return (
    <About
      hookName="useEffect"
      tagline="Triggers side effects to happen in respond to changes in its dependencies"
      notes=<UseEffectPageMainNote />
      videoLink="https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=6s"
    />
  );
}
