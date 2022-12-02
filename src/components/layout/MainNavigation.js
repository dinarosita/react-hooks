import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <logo>
        <Link to="/react-hooks/usestate">React hooks</Link>
      </logo>
      <nav>
        <ul>
          <li>
            <Link to="/react-hooks/usestate">useState</Link>
          </li>
          <li>
            <Link to="/react-hooks/useeffect">useEffect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
