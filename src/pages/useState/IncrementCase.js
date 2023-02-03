import { useState } from "react";

function IncrementCase() {
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
      <p>The number is the state and the increment and decrement button trigger the change to the state (setState).</p>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <p>{action}</p>
    </div>
  );
}

export default IncrementCase;
