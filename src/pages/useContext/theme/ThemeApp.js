import React from "react";
import FunctionConsumer from "./FunctionConsumer";
import { ThemeProvider } from "./ThemeContext";

function ThemeApp() {
  return (
    <ThemeProvider>
      <FunctionConsumer />
    </ThemeProvider>
  );
}

export default ThemeApp;
