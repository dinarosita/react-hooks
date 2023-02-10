import React from "react";

function CustomInput1({ style, ...props }) {
  return (
    <input
      {...props}
      style={{
        backgroundColor: "mistyrose",
        color:"green",
        ...style,
      }}
    />
  );
}

export default CustomInput1;
