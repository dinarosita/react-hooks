import React, { useContext } from "react";
import { CompareCaseThemeContext } from "./CompareCaseApp";

export default function CompareCaseFunctionConsumer() {
  const dark = useContext(CompareCaseThemeContext);
  const themeStyles = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "white" : "gray",
    padding: "1.5rem",
    border: "2px solid gray",
    borderRadius: ".5rem",
    fontWeight: "bold",
  };

  return <div style={themeStyles}>Function Consumer</div>;
}
