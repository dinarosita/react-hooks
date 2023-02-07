import React from "react";
import About from "../../layout/About"
import CustomHookPageMainNote from "./CustomHookPageMainNote"

export default function CustomHookPageAbout() {
  return (
    <About
      hookName="CustomHook"
      tagline=""
      notes=<CustomHookPageMainNote />
      videoLink="https://youtu.be/6ThXsUwLWvc?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
