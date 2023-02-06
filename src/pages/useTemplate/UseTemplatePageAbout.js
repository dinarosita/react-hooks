import React from "react";
import About from "../../layout/About"
import UseTemplatePageMainNote from "./UseTemplatePageMainNote"

export default function UseTemplatePageAbout() {
  return (
    <About
      hookName="useTemplate"
      tagline=""
      notes=<UseTemplatePageMainNote />
      videoLink=""
    />
  );
}
