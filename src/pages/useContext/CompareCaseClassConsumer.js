import React, { Component } from "react";
import { CompareCaseThemeContext } from "./CompareCaseApp";

export default class CompareCaseClassConsumer extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "gray" : "white",
      color: dark ? "white" : "gray",
      padding: "1.5rem",
      border: "2px solid gray",
      borderRadius: ".5rem",
      fontWeight: "bold",
    };
  }

  render() {
    return (
      <CompareCaseThemeContext.Consumer>
        {(theme) => {
          return <div style={this.themeStyles(theme)}>Class Consumer</div>;
        }}
      </CompareCaseThemeContext.Consumer>
    );
  }
}
