import React, { useImperativeHandle, useRef } from "react";
import mc from "./Modal.module.css";
import cc from "../../styles/Global.module.css";

function ConfirmationModal3({ isOpen, onClose }, ref) {
    const closeRef = useRef()
    const confirmRef = useRef()
    const denyRef = useRef()
    useImperativeHandle(ref, () => {return{
        focusClose: () => {closeRef.current.focus()},
        focusConfirm: () => {confirmRef.current.focus()},
        focusDeny: () => {denyRef.current.focus()},
    }}, [])

  if (!isOpen) return null;
  return (
    <div className={mc.box}>
      <button ref={closeRef} onClick={onClose}className={mc.closeBtn}>&times;</button>
      <div className={mc.content}>
        <h3>Confirmation</h3>
        <p>Do you confirm?</p>
        <div className={cc.hFlex}>
            <button ref={confirmRef} onClick={onClose}>Yes</button>
            <button ref={denyRef} onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(ConfirmationModal3)
