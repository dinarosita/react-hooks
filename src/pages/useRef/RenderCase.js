import React, { useEffect, useState, useRef } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import RenderCaseText from "./RenderCaseText";

export default function RenderCase() {
  const [name, setName] = useState("Dina");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  //   const [renderCount, setRenderCount] = useState(0)

  //   useEffect(() => {
  //       setRenderCount(prevRenderCount => prevRenderCount +1)
  //   })

  return (
    <section className={classes.mainsection}>
      <h2>Render Count</h2>
      <p>
        Without useRef, this counter will create an infinite loop of rendering.
      </p>
      <div className={classes.scriptrun}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>Name: {name}</div>
        <div>Render count: {renderCount.current}</div>
      </div>

      <ShowHideProvider>
        <ShowHideButton textFile=<RenderCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
