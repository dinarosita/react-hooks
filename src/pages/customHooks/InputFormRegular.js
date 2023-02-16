import React, { useState } from "react";
import classes from "../../styles/Global.module.css";

export default function InputFormRegular() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>Regular</p>{" "}
      <input
        type="text"
        value={name}
        placeholder="Type name"
        onChange={(e) => setName(e.target.value)}
      />
      <div>Name: {name}</div>
      <input
        type="text"
        value={address}
        placeholder="Type address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <div>Address: {address}</div>
    </div>
  );
}
