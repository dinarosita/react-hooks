import React from "react";
import { useEffect, useRef, useState } from "react";
import classes from "../../layout/Global.module.css";

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default function PopupCaseEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    slowFunction(5);
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div className={classes.cardItem}>
      <div className={classes.niceFlow}>
        <h3>useEffect</h3>
        <div style={{ height: "100px" }}>
          <button ref={button} onClick={() => setShow((prev) => !prev)}>
            useEffect
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
              useEffect popup
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
