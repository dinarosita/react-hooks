import React from "react";
import About from "../../layout/About";
import UseEffectMainNote from "./UseEffectMainNote";

export default function UseEffectAbout() {
  return (
    <About
      hookName="useEffect"
      tagline="Triggers side effects to happen in respond to changes in its dependencies"
      notes=<UseEffectMainNote />
      videoLink="https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=6s"
    />
  );
}
