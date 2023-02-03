import React, { useEffect, useState, useRef } from "react";

function PrevValCase() {
  const [name, setName] = useState("Dina");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h2>Remembering Previous value</h2>
      <p>
        While in class component we can persist values between renders using
        class variables, in somponent function such doesn't exist. We can use
        useState to persist such values, but that means an extra rendering. Hook
        useRef can be used instead, and it doesn't cause the extra rerendering.
        This is perhaps biggest use case for useRef.
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is <b>{name}</b> and it used to be <b>{prevName.current}</b>
      </div>
    </div>
  );
}

export default PrevValCase;
