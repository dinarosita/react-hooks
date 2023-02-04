import { Link } from "react-router-dom";
import classes from "./About.module.css";

export default function About(props) {
    const linkName = `/react-hooks/${props.hookName.toLowerCase()}`
  return (
    <section className={classes.about}>
      <h1><Link to={linkName}>{props.hookName}</Link></h1>
      <p className={classes.tagline}>{props.tagline}</p>
      <div>{props.notes}</div>
      <p className={classes.wds}>
        <a href={props.videoLink} target="_blank" rel="noopener noreferrer">
          Watch WDS video
        </a>
      </p>
    </section>
  );
}
