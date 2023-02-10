import React from "react";
import { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";

export default function PopupCaseWithoutEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  return (
    <div className={classes.scriptrun}>
      
        <p className={classes.scriptTitle}>No effect</p>
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
      </div>
     );
}
