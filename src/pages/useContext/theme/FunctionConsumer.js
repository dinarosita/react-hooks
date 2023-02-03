import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionConsumer() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
    padding: "1.5rem",
    margin: ".5rem",
    border: "2px solid gray",
    borderRadius: ".5rem",
    fontWeight: "bold",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}> Function Consumer</div>
    </>
  );
}

export default FunctionConsumer;