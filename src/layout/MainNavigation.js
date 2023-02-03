import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <logo>
        <Link to="/">React hooks</Link>
      </logo>
      <nav>
        <ul>
          <li>
            <Link to="/usestate">useState</Link>
          </li>
          <li>
            <Link to="/useeffect">useEffect</Link>
          </li>
          <li>
            <Link to="/usememo">useMemo</Link>
          </li>
          <li>
            <Link to="/useref">useRef</Link>
          </li>
          <li>
            <Link to="/usecontext">useContext</Link>
          </li>
          <li>
            <Link to="/usereducer">useReducer</Link>
          </li>
          <li>
            <Link to="/usecallback">useCallback</Link>
          </li>
          <li>
            <Link to="/customhooks">Custom Hooks</Link>
          </li>
          <li>
            <Link to="/uselayouteffect">useLayoutEffect</Link>
          </li>
          <li>
            <Link to="/usetransition">useTransition</Link>
          </li>
          <li>
            <Link to="/usedeferredvalue">useDeferredValue</Link>
          </li>
          <li>
            <Link to="/usetemplate">useTemplate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
