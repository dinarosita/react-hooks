import React, { useRef, useState } from 'react'
import CustomInput3 from './CustomInput3'

export default function Sandbox2() {
    const [inputVal, setInputVal] = useState("Sun")
    const inputRef = useRef()
  return (
    <div>
        <h3>Sandbox2</h3>
      <CustomInput3 ref={inputRef} value={inputVal} onChange={e => setInputVal(e.target.value)} style={{color: 'salmon',}} />
      <button onClick={() => inputRef.current.focus()} >Focus</button>
        
    </div>
  )
}
