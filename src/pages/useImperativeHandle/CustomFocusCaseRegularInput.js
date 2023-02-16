import React, { useRef, useState } from 'react'
import classes from "../../styles/Global.module.css";
import ShowHideButton from '../../tools/ShowHideButton';
import { ShowHideProvider } from '../../tools/ToggleContext';
import CustomFocusCaseText1 from './CustomFocusCaseText1';


export default function CustomFocusCaseRegularInput() {
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
    <h3>&lt;input&gt; and useRef</h3>
    <div className={classes.scriptrun}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle(value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
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
  )
}
