import React from "react";

import TemplateSandboxes from "./TemplateSandboxes";
import UseTemplatePageAbout from "./UseTemplatePageAbout";
import TemplateCase from "./TemplateCase";

export default function UseTemplatePage() {
  return (
    <main>
      <UseTemplatePageAbout />
      <TemplateCase />
      <TemplateSandboxes />
    </main>
  );
}
