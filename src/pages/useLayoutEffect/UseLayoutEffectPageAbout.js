import React from "react";
import About from "../../layout/About"
import UseLayoutEffectPageMainNote from "./UseLayoutEffectPageMainNote"

export default function UseLayoutEffectPageAbout() {
  return (
    <About
      hookName="useLayoutEffect"
      tagline="Similar to useEffect, but for layout that needs to be rendered before screen painting"
      notes=<UseLayoutEffectPageMainNote />
      videoLink="https://youtu.be/wU57kvYOxT4?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
