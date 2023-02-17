import React from "react";

import ModalCase from "./ModalCase";
import Sandboxes from "./Sandboxes";
import UseImperativeHandlePageAbout from "./UseImperativeHandlePageAbout";
import CustomFocusCase from "./CustomFocusCase";
import CustomRefCase from "./CustomRefCase";

export default function UseImperativeHandlePage() {
  return (
    <main>
      <UseImperativeHandlePageAbout />
      <CustomFocusCase />
      <CustomRefCase />
      <ModalCase />
      <Sandboxes />
    </main>
  );
}
