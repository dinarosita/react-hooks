import React from "react";

function CustomInput2({ style, ...props }, ref) {
  return (
    <input
      ref={ref}
      {...props}
      style={{
        backgroundColor: "mistyrose",
        ...style,
      }}
    />
  );
}

export default React.forwardRef(CustomInput2);
