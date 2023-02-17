import React from "react";

import UseDebugValuePageAbout from "./UseDebugValuePageAbout";
import TwoStateCase from "./TwoStateCase";
import UseDebugValuePageNotes from "./UseDebugValuePageNotes";

export default function UseDebugValuePage() {
  return (
    <main>
      <UseDebugValuePageAbout />
      <UseDebugValuePageNotes />
      <TwoStateCase />
    </main>
  );
}
