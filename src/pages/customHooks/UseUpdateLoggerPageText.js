import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function UseUpdateLoggerPageText() {
  const title1 = "MainApp.js";
  const text1 = String.raw`function MainApp() {
  const [name, setName] = useLocalStorage("name", "");
  const [address, setAddress] = useLocalStorage("address", "");

  useUpdateLogger(name);
  useUpdateLogger(address);

  return (...);
}`;

  const title2 = "useUpdateLogger.js";
  const text2 = String.raw`function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}`;

  const title3 = "MainApp.js";
  const text3 = String.raw`function MainApp() {
  const [age, setAge] = useLocalStorage("age", "");
  const [trait, setTrait] = useLocalStorage("trait", "");
  
  useUpdateLogger("age", age);
  useUpdateLogger("trait", trait);

  return (...);
}`;

  const title4 = "useUpdateLogMine.js";
  const text4 = String.raw`function useUpdateLogMine(key, value) {
  useEffect(() => {
    console.log(key, ": ", value)
  }, [key, value])
}`;
  return (
    <div className={classes.hFlex}>
      <div className={classes.vFlex}>
        <pre className={classes.verticalTitle}>useUpdateLogger without Key</pre>
        <div className={classes.codeBox}>
          <pre>{title2}</pre>
          <pre>{text2}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title1}</pre>
          <pre>{text1}</pre>
        </div>
      </div>

      <div className={classes.vFlex}>
        <pre className={classes.verticalTitle}>useUpdateLoggerMine with Key</pre>
        <div className={classes.codeBox}>
          <pre>{title4}</pre>
          <pre>{text4}</pre>
        </div>
        <div className={classes.codeBox}>
          <pre>{title3}</pre>
          <pre>{text3}</pre>
        </div>
      </div>
    </div>
  );
}
