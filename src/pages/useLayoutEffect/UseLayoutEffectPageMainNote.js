import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseLayoutEffectPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        useLayoutEffect is similar to useEffect, except it happens
        synchronously, between DOM calculation and screen painting, so the
        layout effects it creates will be taken into account into the painting
        of the screen. useEffect happens asynchronously and get incorporated
        anytime handy. Therefore if the side effect is on the layout, it might
        cause a layout jump especially when it's slow.
      </p>
      <p>
          This hook can be useful for when the side effect matters for the layout, but could be slow. So only use when it's needed.
        </p>
        <pre className={classes.formula}>
        <span className={classes.thehook}>useLayoutEffect</span>(
        <span className={classes.variable}>layoutFunction</span>,{" "}
        <span className={classes.variable}>[dependencies]</span>)
      </pre>
    </div>
  );
}
