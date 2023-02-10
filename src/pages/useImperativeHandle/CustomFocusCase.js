import React, { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CustomInput1 from "./CustomInput1";
import CustomInput2 from "./CustomInput2";
import CustomFocusCaseText1 from "./CustomFocusCaseText1";
import CustomFocusCaseText2 from "./CustomFocusCaseText2";
import CustomFocusCaseText3 from "./CustomFocusCaseText3";
import fc from "../../styles/Formula.module.css";

export default function CustomFocusCase() {
  const [value0, setValue0] = useState("red");
  const inputRef0 = useRef();

  const [value1, setValue1] = useState("red");
  const inputRef1 = useRef();

  const [value2, setValue2] = useState("red");
  const inputRef2 = useRef();

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
      <h2>Custom Focus Ref</h2>
      <div className={classes.insertNote}>
        <p>
          Actually, for merely focusing on a custom input box,{" "}
          <code>useRef</code> is enough. This section is to show how to use{" "}
          <code>useImperativeHandle</code> hook that later on will be useful in
          more complex situation. We will first take a look at using regular{" "}
          <code>useRef</code> for focusing on the regular{" "}
          <code>&lt;input /&gt;</code> box and build up from that.
        </p>
      </div>

      <section className={classes.subsection}>
        <h3>&lt;input&gt; and useRef</h3>
        <div className={classes.scriptrun}>
          <input
            ref={inputRef0}
            value={value0}
            onChange={(e) => setValue0(e.target.value)}
            style={inputStyle(value0)}
          />
          <button onClick={() => inputRef0.current.focus()}>Focus</button>
        </div>

        <p>App key codes:</p>
        <ul>
          <li>
            <code>const inputRef = useRef()</code>
          </li>
          <li>
            <code>
              &lt;input ref={"{"}inputRef{"}"} ... /&gt;
            </code>
          </li>
          <li>
            <code>
              &lt;button onClick={"{"}() =&gt; inputRef.current.focus(){"}"}
              &gt;
            </code>
          </li>
        </ul>

        <ShowHideProvider>
          <ShowHideButton textFile=<CustomFocusCaseText1 /> />
        </ShowHideProvider>
      </section>
      <section className={classes.subsection}>
        <h3>&lt;CustomInput&gt; and useRef</h3>
        <div className={classes.scriptrun}>
          <CustomInput1
            ref={inputRef1}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            style={inputStyle(value1)}
          />
          <button onClick={() => inputRef1.current.focus()}>Focus</button>
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
          Warning (console): Function components cannot be given refs. Attempts
          to access this ref will fail. Did you mean to use React.forwardRef()?
        </p>

        <ShowHideProvider>
          <ShowHideButton textFile=<CustomFocusCaseText2 /> />
        </ShowHideProvider>
      </section>
      <section className={classes.subsection}>
        <h3>CustomInput box with ref forwarded</h3>
        <p>
          For <code>useRef</code> to work, we have to add <code>ref</code>{" "}
          property to the <code>CustomInput</code> function component and export
          it wrapped in <code>React.forwardRef()</code>
        </p>
        <p className={classes.boxTitleRed}>React.forwardRef(CustomInput)</p>
        <div className={classes.scriptrun}>
          <CustomInput2
            ref={inputRef2}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            style={inputStyle(value2)}
          />
          <button onClick={() => inputRef2.current.focus()}>Focus</button>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<CustomFocusCaseText3 /> />
        </ShowHideProvider>
      </section>
    </section>
  );
}
