import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function TwoStateCaseText() {
  const title1 = "MainApp.js";
  const text1 = String.raw`export default function TwoStateCase() {
  const [firstName, setFirstName] = useLocalStorage("Dina");
  const [lastName, setLastName] = useState("Rosita");
  return (
    <div>
      First:{" "}
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last:{" "}
        <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
}`;

  const title2 = "useLocalStorage.js";
  const text2 = String.raw`import { useDebugValue, useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useDebugValue(value);
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}`

  return (
    <div className={classes.hFlex} >
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}