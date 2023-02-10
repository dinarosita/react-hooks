import React from "react";
import About from "../../layout/About"
import UseImperativeHandlePageMainNote from "./UseImperativeHandlePageMainNote"

export default function UseImperativeHandlePageAbout() {
  return (
    <About
      hookName="useImperativeHandle"
      tagline="Create custom ref"
      notes=<UseImperativeHandlePageMainNote />
      videoLink="https://youtu.be/zpEyAOkytkU?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
