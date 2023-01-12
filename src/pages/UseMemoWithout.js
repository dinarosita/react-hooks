import React, { useState } from "react";

function UseMemoWithoutPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "cadetblue" : "white",
    color: dark ? "white" : "cadetblue",
  };
  return (
    <div>
      <h2>Without useMemo</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 2000000000; i++) {}
  return num * 2;
}
export default UseMemoWithoutPage;
