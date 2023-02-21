import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/react-hooks">ReactHooks</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/react-hooks/usestate">useState</Link>
          </li>
          <li>
            <Link to="/react-hooks/useeffect">useEffect</Link>
          </li>
          <li>
            <Link to="/react-hooks/usememo">useMemo &#10710;</Link>
          </li>
          <li>
            <Link to="/react-hooks/useref">useRef</Link>
          </li>
          <li>
            <Link to="/react-hooks/usecontext">useContext</Link>
          </li>
          <li>
            <Link to="/react-hooks/usereducer">useReducer</Link>
          </li>
          <li>
            <Link to="/react-hooks/usecallback">useCallback</Link>
          </li>
          <li>
            <Link to="/react-hooks/uselayouteffect">
              useLayoutEffect &#10710;
            </Link>
          </li>
          <li>
            <Link to="/react-hooks/usetransition">useTransition</Link>
          </li>
          <li>
            <Link to="/react-hooks/usedeferredvalue">
              useDeferredValue &#10710;
            </Link>
          </li>
          <li>
            <Link to="/react-hooks/useimperativehandle">
              useImperativeHandle
            </Link>
          </li>
          <li>
            <Link to="/react-hooks/usedebugvalue">useDebugValue</Link>
          </li>
          <li>
            <Link to="/react-hooks/useid">useId</Link>
          </li>
          <li>
            <Link to="/react-hooks/useeffectevent">useEffectEvent</Link>
          </li>
          <li>
            <Link to="/react-hooks/customhook">Custom Hook</Link>
          </li>
          <li>
            <Link to="/react-hooks/randomtips">Random Tips</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
