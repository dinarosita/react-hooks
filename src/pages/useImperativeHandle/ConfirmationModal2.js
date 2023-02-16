import React, { useImperativeHandle, useRef } from "react";
import classes from "../../styles/Global.module.css";
import mc from "./Modal.module.css";

function ConfirmationModal2({ isOpen, onClose }, ref) {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();
    useImperativeHandle(ref, () => {return{
        focusCloseBtn: () => closeRef.current.focus(),
        focusConfirmBtn: () => confirmRef.current.focus(),
        focusDenyBtn: () => denyRef.current.focus(),
    }}, [])
  if (!isOpen) return null;

  return (
    <div className={mc.box} ref={ref}>
      <button ref={closeRef} onClick={onClose} className={mc.closeBtn}>&times;</button>
      <div className={mc.content}>
        <h3>Confirm</h3>
        <p>Please confirm</p>
        <div className={classes.hFlex}>
            <button ref={confirmRef} onClick={onClose}>Yes</button>
            <button ref={denyRef} onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}
export default React.forwardRef(ConfirmationModal2)