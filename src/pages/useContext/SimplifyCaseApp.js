import React from "react";
import classes from "../../styles/Global.module.css";
import SimplifyCaseConsumer from "./SimplifyCaseConsumer";
import { SimplifyThemeProvider } from "./SimplifyCaseThemeContext";

export default function SimplifyCaseApp() {
  return (
    <div className={classes.scriptrun}>
      <SimplifyThemeProvider>
        <SimplifyCaseConsumer />
      </SimplifyThemeProvider>
    </div>
  );
}
