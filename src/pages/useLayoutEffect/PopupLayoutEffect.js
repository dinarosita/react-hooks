import React from "react";
import { useLayoutEffect, useRef, useState } from "react";

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default function PopupLayoutEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    slowFunction(5);
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);
  
  return (
    <div style={{ height: "100px" }}>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        useLayoutEffect
      </button>
      {show && (
        <div
          style={{
            position: "absolute",
            color: "indianred",
            border: "solid 3px indianred",
            padding: ".5rem",
          }}
          ref={popup}
        >
          useLayoutEffect popup
        </div>
      )}
    </div>
  );
}
