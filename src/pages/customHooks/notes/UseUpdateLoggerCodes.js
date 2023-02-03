import React from "react";
import classes from "../../../pages/Generic.module.css";

export default function UseUpdateLoggerCodes() {
  const title1 = "MainApp.js";
  const text1 = String.raw`...
function MainApp() {
  const [name, setName] = useLocalStorage("name", "");
  const [address, setAddress] = useLocalStorage("address", "");

  useUpdateLogger(name);
  useUpdateLogger(address);

  return (...);
}
...
`;

  const title2 = "useUpdateLogger.js";
  const text2 = String.raw`...
function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}
...
`;

  const title3 = "MainApp.js";
  const text3 = String.raw`...
function MainApp() {
  const [age, setAge] = useLocalStorage("age", "");
  const [trait, setTrait] = useLocalStorage("trait", "");
  
  useUpdateLogger("age", age);
  useUpdateLogger("trait", trait);

  return (...);
}
...
`;

  const title4 = "useUpdateLogMine.js";
  const text4 = String.raw`...
function useUpdateLogMine(key, value) {
  useEffect(() => {
    console.log(key, ": ", value)
  }, [key, value])
}
...
`;
  return (
    <div className={classes.flexbox}>
      <div>
        <h3>useUpdateLogger</h3>
        <p>Without key</p>
        <div>
          <h3>{title2}</h3>
          <pre>{text2}</pre>
        </div>
        <br />
        <div>
          <h3>{title1}</h3>
          <pre>{text1}</pre>
        </div>
      </div>

      <div>
        <h3>useUpdateLogMine</h3>
        <p>With key</p>
        <div>
          <h3>{title4}</h3>
          <pre>{text4}</pre>
        </div>
        <br />
        <div>
          <h3>{title3}</h3>
          <pre>{text3}</pre>
        </div>
      </div>

    </div>
  );
}
