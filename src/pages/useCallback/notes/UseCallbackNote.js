import React from "react";
import UseCallbackCodes from "./UseCallbackCodes";
import classes from "../../../layout/Global.module.css"
import { useDisplay, useDisplayUpdate } from "../../../tools/ToggleContext";

export default function UseCallbackNote() {
  const show = useDisplay();
  const toggleDisplay = useDisplayUpdate();

  const displayStatus = {
    display: show ? "block" : "none",
  };

  const text1 = String.raw`App.js without useCallback
-------------------------
  
  const getItems = () => {
    return [number, number + 1, number + 2];
};

-------------------------
typeof getItems: function`;

  const text2 = String.raw`App.js with useCallback
-------------------------

const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
}, [number]);

-------------------------
typeof getItems: function`;

  const text3 = String.raw`App.js with useMemo
-------------------------

const getItems = useMemo(() => {
    return [number, number + 1, number + 2];
}, [number]);

-------------------------
typeof getItems: object (Doesn't work here)`;

const text4 = String.raw`List.js
-------------------------

useEffect(() => {
  setItems(getItems());
  console.log("Updating Items");
}, [getItems]);
  `;

  const text5 = String.raw`App.js with extra param
-------------------------

const getItems = (inc) => {
  return [number + inc, number + 1 + inc, number + 2 + inc];
};`;

  const text6 = String.raw`List.js with extra param
-------------------------   

useEffect((10) => {
  setItems(getItems());
  console.log("Updating Items");
}, [getItems]);
  `;

  return (
    <div>
      <h4>Hook useCallback</h4>
      <p>
        This hook cache a function definition between rerenders. It works like
        useMemo, but for functions.
      </p>
      <p>In this example, const getItems is a function.</p>
      <h4>Problem without useCallback</h4>
      <p>*Open console to compare*</p>
      <p>
        We want to trigger list update when the number is changed. But instead
        list also gets updated when we toggle theme. This is because getItem
        function gets recreated every time the app component gets rerendered.
        Each time, a new function is recreated, and this is different from the
        previously made one. Even though the number is the same.
      </p>

      <h4>useCallback as the Solution</h4>
      <p>
        Hook useCallback can be used to avoid this. The concept is similar to
        useMemo: only run when certain parameters are changed. This allow
        getItems function to only run when it needs to.
      </p>

      <p>
        useCallback vs useMemo: the variable sets with useMemo will get the
        return value as the new value. With useCallback, the variable is set
        with the entire function.
      </p>
      <div className={classes.cardGroup}>
        <pre className={classes.codesnippet}>{text1}</pre>
        <pre className={classes.codesnippet}>{text2}</pre>
        <pre className={classes.codesnippet}>{text3}</pre>
        <pre className={classes.codesnippet}>{text4}</pre>
      </div>

      <div>
        <h3>Rarely used</h3>
        <p>In most cases, what we worry of is referential equality. We want the function to not rerender if the dependencies don't change. And in that case, the return value will be the same. Hook useMemo is already intended for this purpose. There are 2 situations useCallback will be needed:</p>
        <ul>
            <li>the function takes extra parameter (like in below example)</li>
            <li>for the purpose of creating new functions, but we might not encounter this.</li>
        </ul>
      </div>

      <div className={classes.cardGroup}>
        <pre className={classes.codesnippet}>{text5}</pre>
        <pre className={classes.codesnippet}>{text6}</pre>
      </div>


      <button onClick={toggleDisplay}>
        {show ? "Hide codes" : "Show codes"}
      </button>

      <div style={displayStatus}>
        <UseCallbackCodes />
      </div>
    </div>
  );
}
