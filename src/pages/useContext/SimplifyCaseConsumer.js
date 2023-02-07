import React from "react";
import { SimplifyTheme, SimplifyThemeUpdate } from "./SimplifyCaseThemeContext";

export default function SimplifyCaseConsumer() {
  const dark = SimplifyTheme();
  const toggleTheme = SimplifyThemeUpdate();
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
    padding: "1.5rem",
    marginTop: "1rem",
    border: "2px solid gray",
    borderRadius: ".5rem",
    fontWeight: "bold",
  };

  return (
    <div>
      <button onClick={toggleTheme} style={{ width: "fit-content" }}>
        Toggle Theme
      </button>
      <div style={themeStyles}> Function Consumer</div>
    </div>
  );
}
