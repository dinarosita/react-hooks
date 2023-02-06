import React from "react";
import { useRef, useState } from "react";
import classes from "../../layout/Global.module.css";

export default function PopupCaseWithoutEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  return (
    <div className={classes.cardItem}><div className={classes.niceFlow}>
      
        <h3>No effect</h3>
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
    </div>
  );
}
