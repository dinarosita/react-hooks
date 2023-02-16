import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CustomInput5 from "./CustomInput5";

export default function SandBox3() {
  const [val, setVal] = useState("Dog");
  const inputRef = useRef();
  return (
    <div>
        <h3>Sandbox 3</h3>
      <CustomInput5
        value={val}
        ref={inputRef}
        style={{ color: "blue" }}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </div>
  );
}
