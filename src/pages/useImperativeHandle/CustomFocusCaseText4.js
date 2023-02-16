import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CustomFocusCaseText4() {
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
      <button onClick={() => inputRef.current.alertHi()}>
        Focus
      </button>
    </div>
  )
}`;

  const title4 = "CustomInput with forwarded ref";
  const text4 = String.raw`import React from "react";

function CustomInput2({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {alertHi: () => {return {alert("hi")}}    ,
    []
  )
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

export default React.forwardRef(CustomInput2);
`;

  return (
    <div className={classes.hFlex}>
        <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>

      <div className={classes.codeBox}>
        <pre>{title4}</pre>
        <pre>{text4}</pre>
      </div>
    </div>
  );
}
