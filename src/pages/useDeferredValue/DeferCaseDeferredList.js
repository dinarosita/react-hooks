import React, { useDeferredValue, useEffect } from "react";

export default function DeferCaseDeferredList({ input, size }) {
  const deferredInput = useDeferredValue(input);
  const l = [];

  for (let i = 0; i < size; i++) {
    l.push(<li key={i}>{deferredInput}</li>);
  }
  useEffect(() => {
    console.log(`DeferredInput: ${deferredInput}`);
  }, [deferredInput]); 
  useEffect(() => {
    console.log(`Input: ${input}`);
  }, [input]);
  return l;
}
