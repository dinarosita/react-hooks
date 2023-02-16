import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function ModalCaseText() {
  const title1 = "MainApp.js";
  const text1 = String.raw`import React, { useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function ModalCaseScenario() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();
  return (
      <div>
        <div>
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => modalRef.current.focusCloseBtn()}>
            Focus Close
          </button>
          <button onClick={() => modalRef.current.focusConfirmBtn()}>
            Focus Confirm
          </button>
          <button onClick={() => modalRef.current.focusDenyBtn()}>
            Focus Deny
          </button>
        </div>
        <ConfirmationModal
          ref={modalRef}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
    </div>
  );
}
`;
  const title2 = "ComfirmationModal.js";
  const text2 = String.raw`import React, { useImperativeHandle, useRef } from "react";

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
    []
  );
  if (!isOpen) return null;
  return (
    <div ref={ref}>
      <button ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div>
        <h3>Confirmation Box</h3>
        <p>Do you confirm?</p>
        <div>
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
`;

  return (
    <div className={classes.hFlex}>
      <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
