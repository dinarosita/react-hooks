import React from "react";
import About from "../../layout/About"
import UseCallBackPageMainNote from "./UseCallBackPageMainNote"

export default function UseCallbackPageAbout() {
  return (
    <About
      hookName="useCallback"
      tagline="Cache a function definition between rerenders. Similar to useMemo but for functions."
      notes=<UseCallBackPageMainNote />
      videoLink="https://youtu.be/_AyFP5s69N4?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
