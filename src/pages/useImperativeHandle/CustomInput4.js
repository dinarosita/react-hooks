import React, { useImperativeHandle } from "react";

function CustomInput4({ style, ...props }, ref) {
    useImperativeHandle(
        ref,
        () => {
            return { alertHi: () => alert("hi")}
        },
        []
    )
  return (
    <input
      {...props}
      style={{
        backgroundColor: "mistyrose",
        ...style,
      }}
    />
  );
}

export default React.forwardRef(CustomInput4);
