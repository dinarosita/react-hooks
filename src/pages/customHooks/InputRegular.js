import React, { useState } from "react";

export default function InputRegular() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
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
