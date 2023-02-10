import React, { useRef, useState } from "react";
import CustomInput3 from "./CustomInput3";

export default function SandBox1() {
  const [inputVal, setInputVal] = useState("Blue");
  const inputRef = useRef();

  return (
    <div>
      <h3>SandBox1</h3>
      <CustomInput3
        ref={inputRef}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
