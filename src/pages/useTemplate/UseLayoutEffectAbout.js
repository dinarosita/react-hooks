import React from "react";
import About from "../../../src/layout/About"
import UseTemplateMainNote from "./UseTemplateMainNote"

export default function UseTemplateAbout() {
  return (
    <About
      hookName="useTemplate"
      tagline=""
      notes=<UseTemplateMainNote />
      videoLink=""
    />
  );
}
