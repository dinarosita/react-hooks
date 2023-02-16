import React, { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CustomInput1 from "./CustomInput1";
import CustomFocusCaseText2 from "./CustomFocusCaseText2";

export default function CustomFocusCaseCustomInputDud() {
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
      <h3>&lt;CustomInput&gt; and useRef</h3>
      <div className={classes.scriptrun}>
        <CustomInput1
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={inputStyle(value)}
        />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
      <div>
        <p className={classes.formulaTitle}>
          Basic CustomInput.js with styling capability
        </p>
        <pre className={classes.formula}>
          export default{" "}
          <span className={fc.foc}>
            CustomInput(
            <span className={fc.prop}>
              {"{"} style, ...props {"}"}
            </span>
            ) {"{"}
            <pre className={fc.indent}>
              return (
              <pre className={fc.indent}>
                <span className={fc.foc2}>
                  &lt;input
                  <pre className={fc.indent}>
                    <span className={fc.prop2}>
                      {"{"}...props{"}"}
                      <br />
                      style={"{{"}
                      <pre className={fc.indent}>
                        <span className={fc.propval}>
                          backgroundColor: "mistypink", <br />
                          ...style,
                        </span>
                      </pre>
                      {"}}"}
                    </span>
                  </pre>
                  /&gt;
                </span>
              </pre>
              )
            </pre>
            {"}"}
          </span>
        </pre>
      </div>

      <p>
        However the focusing by <code>useRef</code> doesn't work here.
      </p>
      <p>
        Warning (console): Function components cannot be given refs. Attempts to
        access this ref will fail. Did you mean to use React.forwardRef()?
      </p>

      <ShowHideProvider>
        <ShowHideButton textFile=<CustomFocusCaseText2 /> />
      </ShowHideProvider>
    </section>
  );
}
