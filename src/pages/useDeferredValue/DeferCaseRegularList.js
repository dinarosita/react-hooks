import React, { useEffect } from "react";

export default function DeferCaseRegularList({ input, size }) {
  const l = [];

  for (let i = 0; i < size; i++) {
    l.push(<li key={i}>{input}</li>);
  }

  useEffect(() => {
    console.log(`Input: ${input}`);
  }, [input]);

  return l;
}
