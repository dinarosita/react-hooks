import { useEffect, useState } from "react";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import classes from "../../styles/Global.module.css";
import PowerCaseText from "./PowerCaseText";

export default function PowerCase() {
  const [power, setPower] = useState(2);
  const [label, setLabel] = useState("Let's power up!");

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
    <section className={classes.mainsection}>
      
        <h2>Power Case</h2>
        <div className={classes.scriptrun}>
          <div className={classes.hFlex}>
            <button onClick={startPower}>Start over</button>{" "}
            <button onClick={upPower}>Power up</button>
          </div>
          <div className={classes.feedback}>Number: {power}</div>

          <div>Action: {label}</div>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<PowerCaseText /> />
        </ShowHideProvider>
 </section>
  );
}
