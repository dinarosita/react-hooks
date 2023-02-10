import { Link } from "react-router-dom";
import classes from "../styles/Global.module.css";

export default function About(props) {
  const internalLink = `/react-hooks/${props.hookName.toLowerCase()}`;
  const reactDocsLink =
    props.hookName === "CustomHook"
      ? "https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components"
      : `https://beta.reactjs.org/reference/react/${props.hookName}`;
  return (
    <section className={classes.mainsection}>
      <h1>
        <Link to={internalLink}>{props.hookName}</Link>
      </h1>
      <p className={classes.tagline}>{props.tagline}</p>
      <div>{props.notes}</div>
      <ul className={classes.footer}>
        <li>
          <a href={reactDocsLink} target="_blank" rel="noopener noreferrer">
            ReactDocs
          </a>
        </li>
        <li>
          <a href={props.videoLink} target="_blank" rel="noopener noreferrer">
            WDS Video
          </a>
        </li>
        {props.codeyluwak && (
          <li>
            <a
              href={props.codeyluwak}
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeyLuwak
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}
