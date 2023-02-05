import classes from "../../layout/Global.module.css";
import { useState, useEffect } from "react";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import WidthText from "./WidthText";

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
    <section>
      <div className={classes.niceFlow}>
        <h2>Window width</h2>
        <div className={classes.cardItem}>
          <div className={classes.displaySingle}>Window width: {windowWidth}</div>
        </div>
        <div className={classes.insertNote}>
          <p>
            Window addEventListener is added to the useEffect function to
            fluidly detect the change in the width, then as side effect, the
            width is displayed back on the screen fluidly. Don't forget to add
            return remove event listener.
          </p>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<WidthText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
