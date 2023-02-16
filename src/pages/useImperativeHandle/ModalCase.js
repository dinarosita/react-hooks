import React, { useRef, useState } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ModalCaseText from "./ModalCaseText";
import ConfirmationModal from "./ConfirmationModal";

export default function ModalCase() {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();
  return (
    <section className={classes.mainsection}>
      <h2>Confirmation Modal</h2>
      <div className={classes.scriptrun}>
        <div className={classes.hFlex}>
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
      <p>We are handling several refs within q main ref group. The main ref is handled with <code>useImperativeHandle</code>, while the child refs within are handled using <code>useRef</code></p>
      <p>Note: It should work with <code>[]</code> as dependency, but it doesn't somehow. But when ref={"{"}ref{"}"} is removed from the parent div, like in confirmation1 example, it works. what's ref={"{"}ref{"}"} for anyway? This only in effect if the react site is entirely rebuilt. If it's only refreshed from previously work, then it's fine.</p>

      <ShowHideProvider>
        <ShowHideButton textFile=<ModalCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
