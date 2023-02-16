import React from "react";
import classes from "../../styles/Global.module.css";
import useLocalStorageMine from "./useLocalStorageMine";
import useUpdateLoggerMine from "./useUpdateLoggerMine";

export default function InputFormMine() {
  const [age, setAge] = useLocalStorageMine("age", "");
  const [trait, setTrait] = useLocalStorageMine("trait", "");
  useUpdateLoggerMine("age", age);
  useUpdateLoggerMine("trait", trait);

  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>MyExercise</p>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Type age"
      />
      <div>Age: {age}</div>
      <input
        type="text"
        value={trait}
        onChange={(e) => setTrait(e.target.value)}
        placeholder="Type trait"
      />
      <div>Trait: {trait}</div>
    </div>
  );
}
