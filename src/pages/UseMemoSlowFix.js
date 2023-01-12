import React, { useState, useMemo } from "react";

function UseMemoSlowFixPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "cadetblue" : "white",
    color: dark ? "white" : "cadetblue",
  };
  return (
    <div>
        <h1>useMemo for slow function</h1>
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
export default UseMemoSlowFixPage;
