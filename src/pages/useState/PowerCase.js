import { useEffect, useState } from "react";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import PowerText from "./PowerText";

export default function PowerCase() {
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
      <button onClick={startPower}>Start over</button>{" "}
      <button onClick={upPower}>Power up</button>
      <p>Action: {label}</p>
      <p>Number: {power}</p>
      <ShowHideProvider>
        <ShowHideButton textFile=<PowerText /> />
      </ShowHideProvider>
    </div>
  );
}
