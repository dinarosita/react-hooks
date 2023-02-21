import React from "react";
import About from "../../layout/About"
import UseIdPageMainNote from "./UseIdPageMainNote"

export default function UseIdPageAbout() {
  return (
    <About
      hookName="useId"
      tagline="Generates unique IDs that can be passed to accessibility attributes"
      notes=<UseIdPageMainNote />
      videoLink="https://youtu.be/_vwCKV7f_eA?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
    />
  );
}
