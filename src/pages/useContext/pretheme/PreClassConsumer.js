import React, { Component } from "react";
import { PreThemeContext } from "./PreThemeApp";

class PreClassConsumer extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "gray" : "white",
      color: dark ? "white" : "gray",
      padding: "1.5rem",
      margin: ".5rem",
      border: "2px solid gray",
      borderRadius: ".5rem",
      fontWeight: "bold",
    };
  }

  render() {
    return (
      <PreThemeContext.Consumer>
        {(theme) => {
          return (
            <div style={this.themeStyles(theme)}>Pre Class Consumer</div>
          );
        }}
      </PreThemeContext.Consumer>
    );
  }
}

export default PreClassConsumer;
