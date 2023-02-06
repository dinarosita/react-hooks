
import React from "react";
import UseMemoPageAbout from "./UseMemoPageAbout"
import SlowFunctionCase from "./SlowFunctionCase";
import ReferenceCase from "./ReferenceCase";

export default function UseMemoPage() {
  return (
    <main>
      <UseMemoPageAbout />
      <SlowFunctionCase />
      <ReferenceCase />
    </main>
  );
}