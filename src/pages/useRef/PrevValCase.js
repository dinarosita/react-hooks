import React, { useEffect, useState, useRef } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import PrevValCaseText from "./PrevValCaseText";

export default function PrevValCase() {
  const [name, setName] = useState("Dina");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <section className={classes.mainsection}>
      <h2>Remembering Previous Value</h2>
      <p>
        While in class component we can persist values between renders using
        class variables, in somponent function such doesn't exist. We can use
        useState to persist such values, but that means an extra rendering. Hook
        useRef can be used instead, and it doesn't cause the extra rerendering.
        This is perhaps biggest use case for useRef.
      </p>
      <div className={classes.scriptrun}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>Previous: {prevName.current}</div>
        <div>Current : {name}</div>
      </div>

      <ShowHideProvider>
        <ShowHideButton textFile=<PrevValCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
