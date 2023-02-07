import React from "react";
import About from "../../layout/About"
import CustomHookPageMainNote from "./CustomHookPageMainNote"

export default function CustomHookPageAbout() {
  return (
    <About
      hookName="CustomHook"
      tagline="Create custom hook with useHookname format"
      notes=<CustomHookPageMainNote />
      codeyluwak="https://dinarosita.github.io/codeyluwak/react_customhooks.html"
      videoLink="https://youtu.be/6ThXsUwLWvc?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
