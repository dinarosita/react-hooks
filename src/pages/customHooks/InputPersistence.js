import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function InputPersistence() {
  const [name, setName] = useLocalStorage("name", "");
  const [address, setAddress] = useLocalStorage("address", "");
  useUpdateLogger(name);
  useUpdateLogger(address);

  return (
    <div>
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
