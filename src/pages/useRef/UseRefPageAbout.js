import React from "react";
import About from "../../layout/About"
import UseRefPageMainNote from "./UseRefPageMainNote"

export default function UseRefPageAbout() {
  return (
    <About
      hookName="useRef"
      tagline="Persist value between renders without triggering re-rendering"
      notes=<UseRefPageMainNote />
      videoLink="https://www.youtube.com/watch?v=t2ypzz6gJm0"
    />
  );
}
