import React from "react";
import About from "../../layout/About"
import UseDebugValuePageMainNote from "./UseDebugValuePageMainNote"

export default function UseDebugValuePageAbout() {
  return (
    <About
      hookName="useDebugValue"
      tagline="A hook special for custom hooks to display chosen value(s) in React devtool extension 'Component'"
      notes=<UseDebugValuePageMainNote />
      videoLink="https://youtu.be/pTF86K8JZBQ?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
