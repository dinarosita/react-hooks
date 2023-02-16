import React, { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CustomInput2 from "./CustomInput2";
import CustomFocusCaseText3 from "./CustomFocusCaseText3";

export default function CustomFocusCaseCustomInput() {
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
    <section className={classes.subsection}>
      <h3>CustomInput box with ref forwarded</h3>
      <p>
        For <code>useRef</code> to work, we have to add <code>ref</code>{" "}
        property to the <code>CustomInput</code> function component and export
        it wrapped in <code>React.forwardRef()</code>
      </p>
      <div className={classes.scriptrun}>
        <CustomInput2
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={inputStyle(value)}
        />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<CustomFocusCaseText3 /> />
      </ShowHideProvider>
    </section>
  );
}
