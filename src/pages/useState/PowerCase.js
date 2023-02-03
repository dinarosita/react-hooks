import { useEffect, useState } from "react";
import classes from "../../pages/Generic.module.css"

function PowerCase() {
  const [power, setPower] = useState(2);
  const [label, setLabel] = useState("Click to start");

  function startPower() {
    setPower(2);
    setLabel("Started over");
  }

  function upPower() {
    setPower((prevPower) => prevPower * prevPower);
    setLabel("Powered up");
  }
  console.log("rendered");

  useEffect(() => {
    console.log("Power changed!");
  }, [power]);

  return (
    <div>
      <h2>Power</h2>
      <div className={classes.displaybox}>Number: {power}</div>
      <button onClick={startPower}>Start over</button>
      <button onClick={upPower}>Power up</button>     
      <p>{label}</p>
    </div>
  );
}

export default PowerCase;
