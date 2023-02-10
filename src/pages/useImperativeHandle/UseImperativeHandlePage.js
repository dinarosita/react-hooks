import React from "react";

import RealCase from "./RealCase";
import SandBox from "./SandBox";
import UseImperativeHandlePageAbout from "./UseImperativeHandlePageAbout";
import CustomFocusCase from "./CustomFocusCase";

export default function UseImperativeHandlePage() {
  return (
    <main>
      <UseImperativeHandlePageAbout />
      <CustomFocusCase />
      <SandBox />
      <RealCase />
    </main>
  );
}
