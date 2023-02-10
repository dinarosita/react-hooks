import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CustomFocusCaseText1() {
  const title1 = "<input> box";
  const text1 = String.raw`App() {
  const [value, setValue] = useState("red");
  const inputRef = useRef();

  const inputStyle = (val) => {
    switch(val){
        case "red" :
            return {color:"indianred"}
        case "blue" :
            return {color:"steelblue"}
        default:
            return {color: "gray"}
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle(value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  )
}`;

  return (
    <div className={classes.horizontalFlex} >
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
    </div>
  );
}