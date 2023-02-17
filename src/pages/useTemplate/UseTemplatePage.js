import React from "react";

import TemplateSandBoxes from "./TemplateSandBoxes";
import UseTemplatePageAbout from "./UseTemplatePageAbout";
import TemplateCase from "./TemplateCase";

export default function UseTemplatePage() {
  return (
    <main>
      <UseTemplatePageAbout />
      <TemplateCase />
      <TemplateSandBoxes />
    </main>
  );
}
