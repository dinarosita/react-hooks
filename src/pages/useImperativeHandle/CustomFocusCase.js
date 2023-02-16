import React from "react";
import classes from "../../styles/Global.module.css";
import CustomFocusCaseRegularInput from "./CustomFocusCaseRegularInput";
import CustomFocusCaseCustomInput from "./CustomFocusCaseCustomInput";
import CustomFocusCaseCustomInputDud from "./CustomFocusCaseCustomInputDud";

export default function CustomFocusCase() {


  return (
    <section className={classes.mainsection}>
      <h2>Custom input focus with useRef</h2>

      <p>
        Actually, for merely focusing on a custom input box, <code>useRef</code>{" "}
        is enough. This section is to show how to use{" "}
        <code>useImperativeHandle</code> hook that later on will be useful in
        more complex situation. We will first take a look at using regular{" "}
        <code>useRef</code> for focusing on the regular{" "}
        <code>&lt;input /&gt;</code> box and build up from that.
      </p>

      <CustomFocusCaseRegularInput />
      <CustomFocusCaseCustomInputDud />
      <CustomFocusCaseCustomInput />
    </section>
  );
}
