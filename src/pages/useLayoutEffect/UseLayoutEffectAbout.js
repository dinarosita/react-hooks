import React from "react";
import About from "../../../src/layout/About"
import UseLayoutEffectMainNote from "./UseLayoutEffectMainNote"

export default function UseLayoutEffectAbout() {
  return (
    <About
      hookName="useLayoutEffect"
      tagline="Similar to useEffect, but for layout that needs to be rendered before screen painting"
      notes=<UseLayoutEffectMainNote />
      videoLink="https://youtu.be/wU57kvYOxT4?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
