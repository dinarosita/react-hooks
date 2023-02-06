import React from "react";
import classes from "../../layout/Global.module.css";

export default function PrevValCaseText() {
  const title1 = "Previous value";
  const text1 = String.raw`export default function PrevValCase() {
  const [name, setName] = useState("Dina");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <div>Previous: {prevName.current}</div>
      <div>Current : {name}</div>
    </div>
  );
}`;

  return (
    <div className={classes.cardGroup}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
    </div>
  );
}
