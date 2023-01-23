import React, { useContext } from "react";
import { PreThemeContext } from "./PreThemeApp";

function PreFunctionConsumer() {
  const dark = useContext(PreThemeContext);
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
    padding: "1.5rem",
    margin: ".5rem",
    border: "2px solid gray",
    borderRadius: ".5rem",
    fontWeight: "bold",
  };

  return <div style={themeStyles}>Pre Function Consumer</div>;
}

export default PreFunctionConsumer;