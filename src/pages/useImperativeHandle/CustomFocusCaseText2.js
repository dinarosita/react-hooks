import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CustomFocusCaseText2() {
  const title2 = "<CustomInput> box";
  const text2 = String.raw`App() {
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
      <CustomInput
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

  const title3 = "CustomInput plain";
  const text3 = String.raw`import React from "react";

function CustomInput1({ style, ...props }) {
  return (
    <input
      {...props}
      style={{
        backgroundColor: "mistyrose",
        ...style,
      }}
    />
  );
}

export default CustomInput1;
`;

  return (
    <div className={classes.horizontalFlex}>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title3}</pre>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
