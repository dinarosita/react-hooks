import React from 'react'
import UseEffectAbout from './useEffect/UseEffectAbout'
import UseStateAbout from './useState/UseStateAbout'
import UseLayoutEffectAbout from './useLayoutEffect/UseLayoutEffectAbout'


export default function Home() {
  return (
    <main>
      <UseStateAbout />
      <UseEffectAbout />
      <UseLayoutEffectAbout />
    </main>
  )
}
