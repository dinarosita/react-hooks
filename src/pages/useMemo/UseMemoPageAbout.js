import React from "react";
import About from "../../layout/About"
import UseMemoPageMainNote from "./UseMemoPageMainNote"

export default function UseMemoPageAbout() {
  return (
    <About
      hookName="useMemo"
      tagline="Memoize function result to be used if no dependency changed"
      notes=<UseMemoPageMainNote />
      videoLink="https://www.youtube.com/watch?v=THL1OPn72vo"
    />
  );
}
