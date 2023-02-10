import classes from "../../styles/Global.module.css";
import { useState, useEffect } from "react";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import WidthCaseText from "./WidthCaseText";

export default function WidthCase() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={classes.mainsection}>
      <h2>Window Width Case</h2>
      <div className={classes.scriptrun}>
        <div>Window width: {windowWidth}</div>
      </div>

      <p>
        Window addEventListener is added to the useEffect function to fluidly
        detect the change in the width, then as side effect, the width is
        displayed back on the screen fluidly. Don't forget to add return remove
        event listener.
      </p>
      <ShowHideProvider>
        <ShowHideButton textFile=<WidthCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
