import {Link} from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <logo>React hooks</logo>
      <nav>
        <ul>
            <li>
                <Link to="./usestate">useState</Link>
            </li>
            <li>
                <Link to="./useEffect">useEffect</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;