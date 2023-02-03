import React, { useEffect, useState, useRef} from "react";

function RenderCase() {
  const [name, setName] = useState("Dina")
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

// const [renderCount, setRenderCount] = useState(0)

// useEffect(() => {
//     setRenderCount(prevRenderCount => prevRenderCount +1)
// })

  return (
    <div>
      <h2>Render Count</h2>
      <p>Without useRef, this counter will create an infinite loop of rendering.</p>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is <b>{name}</b></div>
    <div>I rendered <b>{renderCount.current}</b> times</div>    
    </div>
  );
}

export default RenderCase;
