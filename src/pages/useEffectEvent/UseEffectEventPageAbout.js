import React from "react";
import About from "../../layout/About"
import UseEffectEventPageMainNote from "./UseEffectEventPageMainNote";

export default function UseEffectEventPageAbout() {
  return (
    <About
      hookName="useEffectEvent"
      tagline="Makes useEffect hook much easier and working with side effects much better"
      notes=<UseEffectEventPageMainNote />
      videoLink="https://youtu.be/NZJUEzn10FI?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
