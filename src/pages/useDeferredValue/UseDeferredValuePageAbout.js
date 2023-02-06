import React from "react";
import About from "../../layout/About"
import UseDeferredValuePageMainNote from "./UseDeferredValuePageMainNote"

export default function UseDeferredValuePageAbout() {
  return (
    <About
      hookName="useDeferredValue"
      tagline="Bunching up state changes together"
      notes=<UseDeferredValuePageMainNote />
      videoLink="https://youtu.be/jCGMedd6IWA?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
