import React, { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CustomInput4 from "./CustomInput4";
import CustomFocusCaseText4 from "./CustomFocusCaseText4";

export default function CustomRefCase() {
  const [value, setValue] = useState("Red");
  const inputRef = useRef();

  const inputStyle = (val) => {
    switch (val) {
      case "red":
        return { color: "indianred" };
      case "blue":
        return { color: "steelblue" };
      default:
        return { color: "gray" };
    }
  };
  return (
    <section className={classes.mainsection}>
      <h2>Custom Ref with useImperativeHandle</h2>
      <p>If we want to just use ref to focus on input box, use <code>useRef</code>. Here's an example of how is we want to do something different. In this example, instead of focusing, throwing an alert saying hi. Just for an example how it works.</p>
      <div className={classes.scriptrun}>
        <CustomInput4
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={inputStyle(value)}
        />
        <button onClick={() => inputRef.current.alertHi()}>Hi me!</button>
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<CustomFocusCaseText4 /> />
      </ShowHideProvider>
    </section>
  );
}
