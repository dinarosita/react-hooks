import React from "react";
import { useDinaTheme, useDinaThemeUpdate } from "./DinaThemeContext";

export default function DinaThemeConsumer() {
  const funTheme = useDinaTheme();
  const toggleTheme = useDinaThemeUpdate();
  const funStyles = {
    backgroundColor: funTheme ? "indianred" : "white",
    color: funTheme ? "white" : "gray",
    padding: "1.5rem",
    margin: ".5rem",
    border: "2px solid gray",
    borderRadius: ".5rem",
    fontWeight: "bold",

  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={funStyles}>
        <p>Dina's fun style is here!</p>
        <p>Also check out the display toggle button.</p></div>
    </>
  );
}
