import React, { useState } from "react";

function CountAppUsestate() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button> {number}{" "}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CountAppUsestate;