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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
