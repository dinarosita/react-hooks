import React from "react";
import About from "../../layout/About"
import UseTransitionPageMainNote from "./UseTransitionPageMainNote"

export default function UseTransitionPageAbout() {
  return (
    <About
      hookName="useTransition"
      tagline="Hook to make react app faster and more responsive to improve user experience"
      notes=<UseTransitionPageMainNote />
      videoLink="https://youtu.be/N5R6NL3UE7I?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
