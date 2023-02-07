import React from "react";
import About from "../../layout/About"
import UseContextPageMainNote from "./UseContextPageMainNote"

export default function UseContextPageAbout() {
  return (
    <About
      hookName="useContext"
      tagline="Context allow values to be made global to all their descendents."
      notes=<UseContextPageMainNote />
      codeyluwak="https://dinarosita.github.io/codeyluwak/react_usecontext.html"
      videoLink="https://www.youtube.com/watch?v=5LrDIWkK_Bc"
    />
  );
}
