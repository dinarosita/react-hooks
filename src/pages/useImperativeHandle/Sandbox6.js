import React, { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";
import ConfirmationModal3 from "./ConfirmationModal3";

export default function Sandbox6() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();
  return (
    <div>
      <h3>Confirmation 6</h3>
      <div className={classes.scriptrun}>
        <button onClick={() => setOpen(true)}>Open Confirmation Window</button>

        <div className={classes.hFlex}>
          <button onClick={() => modalRef.current.focusClose()}>Focus Close</button>
          <button onClick={() => modalRef.current.focusConfirm()}>Focus Confirm</button>
          <button onClick={() => modalRef.current.focusDeny()}>Focus Deny</button>
        </div>
        <ConfirmationModal3 ref={modalRef} isOpen={open} onClose={() => setOpen(false)}/>
      </div>
    </div>
  );
}
