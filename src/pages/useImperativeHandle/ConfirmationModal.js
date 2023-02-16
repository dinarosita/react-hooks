import React, { useImperativeHandle, useRef } from "react";
import mc from "./Modal.module.css";
import classes from "../../styles/Global.module.css";

function ConfirmationModal({ isOpen, onClose }, ref) {
  const closeRef = useRef();
  const denyRef = useRef();
  const confirmRef = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () => closeRef.current.focus(),
        focusDenyBtn: () => denyRef.current.focus(),
        focusConfirmBtn: () => confirmRef.current.focus(),
      };
    },   
  );
  if (!isOpen) return null;
  return (
    <div ref={ref} className={mc.box}>
      <button ref={closeRef} onClick={onClose} className={mc.closeBtn}>
        &times;
      </button>
      <div className={mc.content}>
        <h3 className={mc.title}>Confirmation Box</h3>
        <p>Do you confirm?</p>
        <div className={classes.hFlex}>
          <button ref={confirmRef} onClick={onClose}>
            Yes
          </button>
          <button ref={denyRef} onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(ConfirmationModal);
