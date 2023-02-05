import { Link } from "react-router-dom";
import classes from "./Global.module.css";

export default function About(props) {
  const linkName = `/react-hooks/${props.hookName.toLowerCase()}`;
  return (
    <section>
      <div className={classes.niceFlow}>
        <h1>
          <Link to={linkName}>{props.hookName}</Link>
        </h1>
        <p className={classes.tagline}>{props.tagline}</p>
        <div>{props.notes}</div>
        <p className={classes.footage}>
          <a href={props.videoLink} target="_blank" rel="noopener noreferrer">
            Watch WDS video
          </a>
        </p>
      </div>
    </section>
  );
}
