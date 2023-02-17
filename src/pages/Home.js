import React from 'react'
import UseEffectPageAbout from './useEffect/UseEffectPageAbout'
import UseStatePageAbout from './useState/UseStatePageAbout'
import UseLayoutEffectPageAbout from './useLayoutEffect/UseLayoutEffectPageAbout'
import UseMemoPageAbout from './useMemo/UseMemoPageAbout'
import UseRefPageAbout from './useRef/UseRefPageAbout'
import UseTransitionPageAbout from './useTransition/UseTransitionPageAbout'
import UseDeferredValuePageAbout from './useDeferredValue/UseDeferredValuePageAbout'
import UseCallbackPageAbout from './useCallback/UseCallbackPageAbout'
import UseContextPageAbout from './useContext/UseContextPageAbout'
import UseReducerPageAbout from './useReducer/UseReducerPageAbout'
import CustomHookPageAbout from './customHooks/CustomHookPageAbout'
import UseImperativeHandlePageAbout from './useImperativeHandle/UseImperativeHandlePageAbout'
import UseDebugValuePageAbout from './useDebugValue/UseDebugValuePageAbout'

import RandomTips from './RandomTips'

export default function Home() {
  return (
    <main>
      <UseStatePageAbout />
      <UseEffectPageAbout />
      <UseMemoPageAbout />
      <UseRefPageAbout />
      <UseContextPageAbout />
      <UseReducerPageAbout />
      <UseLayoutEffectPageAbout />
      <UseTransitionPageAbout />
      <UseDeferredValuePageAbout />
      <UseCallbackPageAbout />
      <UseImperativeHandlePageAbout />
      <UseDebugValuePageAbout />
      <CustomHookPageAbout />
      <RandomTips />
    </main>
  )
}
