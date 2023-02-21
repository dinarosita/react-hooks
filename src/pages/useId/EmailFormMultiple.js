import React, { useId } from "react";
import classes from "../../styles/Global.module.css";
export default function EmailFormMultiple() {
  const id = useId();
  return (
    <>
      <div className={classes.hFlex}>
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email" />
      </div>
      <div className={classes.hFlex}>
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} type="text" />
      </div>
    </>
  );
}
