import React from 'react'
import useLocalMine from './useLocalMine';
import useUpdateLogMine from './useUpdateLogMine';

export default function MyInputForm() {
    const [age, setAge] = useLocalMine("age", "");
    const [trait, setTrait] = useLocalMine("trait", "")
    useUpdateLogMine("age", age);
    useUpdateLogMine("trait", trait);

  return (
    <div>
      <input type="text" value={age} onChange={e => setAge(e.target.value)} placeholder="Type age"/>
      <p>Age: {age}</p>
      <input type="text" value={trait} onChange={e => setTrait(e.target.value)} placeholder="Type trait"/>
      <p>Trait: {trait}</p>
    </div>
  )
}
