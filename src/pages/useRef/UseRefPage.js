
import React from "react";
import UseRefPageAbout from "./UseRefPageAbout"
import RenderCase from "./RenderCase";
import PrevValCase from "./PrevValCase";
import FocusCase from "./FocusCase";
import CustomFocusCase from "../useImperativeHandle/CustomFocusCase";

export default function UseRefPage() {
  return (
    <main>
      <UseRefPageAbout />
      <RenderCase />
      <PrevValCase />
      <FocusCase />
      <CustomFocusCase />
    </main>
  );
}