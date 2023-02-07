import React from "react";
import classes from "../../layout/Global.module.css";
import SimplifyCaseConsumer from "./SimplifyCaseConsumer";
import { SimplifyThemeProvider } from "./SimplifyCaseThemeContext";

export default function SimplifyCaseApp() {
  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>useContext</h3>
        <SimplifyThemeProvider>
          <SimplifyCaseConsumer />
        </SimplifyThemeProvider>
      </div>
    </div>
  );
}
