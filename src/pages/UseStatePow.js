import { useEffect, useState } from "react";
import classes from "./UseState.module.css";

function UseStatePowPage() {
  const [power, setPower] = useState(2);
  const [label, setLabel] = useState("Click to start");

  function startPower() {
    setPower(2);
    setLabel("Refreshed to 2");
  }

  function upPower() {
    setPower((prevPower) => prevPower * prevPower);
    setLabel("Power up");
  }
  console.log("rendered");

  useEffect(() => {
    console.log("Power changed!");
  }, [power]);

  return (
    <div>
      <h2>Power</h2>
      <button onClick={startPower}>Start over</button>
      <button onClick={upPower}>Power up</button>

      <div className={classes.display}>{power}</div>
      <p>{label}</p>
    </div>
  );
}

export default UseStatePowPage;
