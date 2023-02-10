import React from "react";

function CustomInput3({ style, ...props }, ref) {
  return (
    <input
      ref={ref}
      {...props}
      style={{ border: "1px solid salmon", fontWeight: "bold", ...style }}
    />
  );
}
export default React.forwardRef(CustomInput3);
