import React, { useRef, useState } from 'react'
import classes from "../../styles/Global.module.css"
import ConfirmationModal2 from './ConfirmationModal2'

export default function Sandbox5() {
    const [open,setOpen] = useState(false)
    const modalRef = useRef()
  return (
    <div>
      <h3>Confirmation 1</h3>
      <div className={classes.hFlex}>
        <button onClick={() => setOpen(true)}>Open</button>
        <button onClick={() => modalRef.current.focusCloseBtn()}>Close</button>
        <button onClick={() => modalRef.current.focusConfirmBtn()}>Confirm</button>
        <button onClick={() => modalRef.current.focusDenyBtn()}>Deny</button>
      </div>
    <ConfirmationModal2 isOpen={open} ref={modalRef} onClose={() => setOpen(false)} />
    </div>
  )
}
