import React, { useImperativeHandle } from "react";

function CustomInput5({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        alertHi: () => {
          alert("Hi")
        },
      };
    },
    []
  );
  return (
    <input
      {...props}
      style={{ backgroundColor: "paleblue", ...style }}
      ref={ref}
    />
  );
}

export default React.forwardRef(CustomInput5);
