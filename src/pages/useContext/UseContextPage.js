
import React from "react";
import UseContextPageAbout from "./UseContextPageAbout"
import CompareCase from "./CompareCase";
import SimplifyCase from "./SimplifyCase";
import ShowHideCase from "./ShowHideCase";

export default function UseContextPage() {
  return (
    <main>
      <UseContextPageAbout />
      <CompareCase />
      <SimplifyCase />
      <ShowHideCase />
    </main>
  );
}