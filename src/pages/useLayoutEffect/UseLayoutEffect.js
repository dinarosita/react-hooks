import classes from "../../layout/Page.module.css";
import TopSection from "../../layout/TopSection";
import { ShowHideProvider } from "../../tools/ToggleContext";
import EffectCounter from "./EffectCounter";
import LayoutEffectCounter from "./LayoutEffectCounter";
import PopupLayoutEffect from "./PopupLayoutEffect";
import React from "react";
import PopupEffect from "./PopupEffect";
import PopupWithoutEffect from "./PopupWithoutEffect";
import LayoutEffectCounterNotes from "./notes/LayoutEffectCounterNotes";
import LayoutEffectPopupNotes from "./notes/LayoutEffectPopupNotes";

function UseLayoutEffectPage() {
  return (
    <main>
      <TopSection
        hookName="LayoutEffect"
        videoLink="https://youtu.be/wU57kvYOxT4?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
        videoTitle="Learn useLayoutEffect in 5 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_uselayouteffect.html"
      />
      <section className={classes.hookbox}>
        <h2>Similar to useEffect but for layout that must execute before the painting of the screen</h2>
        <p>
          useLayoutEffect is similar to useEffect, except it happens
          synchronously, between DOM calculation and screen painting, so the layout effects it creates will be taken into account into the painting of the screen. useEffect happens asynchronously and get incorporated anytime handy. Therefore if the side effect is on the layout, it might cause a layout jump especially when it's slow.
        </p>
        <p>
          This hook can be useful for when the side effect matters for the layout, but could be slow. So only use when it's needed.
        </p>
      </section>
      <section className={classes.hookbox}>
        <h2>Popup Layout</h2>
        <p></p>
        <div className={classes.flexbox}>
          <React.StrictMode>
            <div>
              <h3>Popup with useEffect</h3>
              <PopupEffect />
            </div>
            <div>
              <h3>Popup with useLayoutEffect</h3>
              <PopupLayoutEffect />
            </div>
            <div>
              <h3>Popup without effect</h3>
              <PopupWithoutEffect />
            </div>
          </React.StrictMode>
        </div>

        <ShowHideProvider>
          <LayoutEffectPopupNotes />
        </ShowHideProvider>
      </section>

      <section className={classes.hookbox}>
        <h2>Counter</h2>
        <div className={classes.flexbox}>
          <div>
            <h3>Counter with useEffect</h3>
            <EffectCounter />
          </div>
          <div>
            <h3>Counter with useLayoutEffect</h3>
            <LayoutEffectCounter />
          </div>
        </div>

        <ShowHideProvider>
          <LayoutEffectCounterNotes />
        </ShowHideProvider>
      </section>
    </main>
  );
}

export default UseLayoutEffectPage;
