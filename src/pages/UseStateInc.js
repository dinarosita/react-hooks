import { useState } from "react";

function UseStateIncPage() {
  const [count, setCount] = useState(4);
  const [action, setAction] = useState("Click to start");
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setAction("Going down");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setAction("Going up");
  }

  return (
    <div>
      <h2>Increments</h2>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <p>{action}</p>
    </div>
  );
}

export default UseStateIncPage;
