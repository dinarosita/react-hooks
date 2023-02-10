import React from "react";
import classes from "../../styles/Global.module.css";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function InputFormPersistence() {
  const [name, setName] = useLocalStorage("name", "");
  const [address, setAddress] = useLocalStorage("address", "");
  useUpdateLogger(name);
  useUpdateLogger(address);

  return (
    <div className={classes.scriptrun}>
      <p className={classes.scriptTitle}>useLocalStorage</p>
      <input
        type="text"
        value={name}
        placeholder="Type name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>

      <input
        type="text"
        value={address}
        placeholder="Type address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <p>Address: {address}</p>
    </div>
  );
}
