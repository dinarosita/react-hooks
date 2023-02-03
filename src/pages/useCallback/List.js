import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);
  return (
    <div>
      <p>Number List:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
