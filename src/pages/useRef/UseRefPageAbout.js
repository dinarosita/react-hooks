import React from "react";
import About from "../../layout/About"
import UseRefPageMainNote from "./UseRefPageMainNote"

export default function UseRefPageAbout() {
  return (
    <About
      hookName="useRef"
      tagline="Reference a value that's not needed for rendering"
      notes=<UseRefPageMainNote />
      videoLink="https://www.youtube.com/watch?v=t2ypzz6gJm0"
    />
  );
}
