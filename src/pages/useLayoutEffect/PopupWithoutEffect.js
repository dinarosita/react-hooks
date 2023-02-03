import React from "react";
import { useRef, useState } from "react";

export default function PopupWithoutEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  return (
    <div style={{ height: "100px" }}>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Without effect
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
          Popup without effect
        </div>
      )}
    </div>
  );
}
