import React from 'react'
import UseEffectPageAbout from './useEffect/UseEffectPageAbout'
import UseStatePageAbout from './useState/UseStatePageAbout'
import UseLayoutEffectPageAbout from './useLayoutEffect/UseLayoutEffectPageAbout'
import UseMemoPageAbout from './useMemo/UseMemoPageAbout'
import UseRefPageAbout from './useRef/UseRefPageAbout'
import UseTransitionPageAbout from './useTransition/UseTransitionPageAbout'
import UseDeferredValuePageAbout from './useDeferredValue/UseDeferredValuePageAbout'
import UseCallbackPageAbout from './useCallback/UseCallbackPageAbout'


export default function Home() {
  return (
    <main>
      <UseStatePageAbout />
      <UseEffectPageAbout />
      <UseMemoPageAbout />
      <UseRefPageAbout />
      <UseLayoutEffectPageAbout />
      <UseTransitionPageAbout />
      <UseDeferredValuePageAbout />
      <UseCallbackPageAbout />
    </main>
  )
}
