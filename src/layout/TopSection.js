import classes from "./TopSection.module.css";

function TopSection(props) {
  return (
    <section className={classes.hookbox}>
      <h1>use{props.hookName}</h1>
      <p className={classes.tagline}>{props.tagline}</p>
      <div>{props.notes}</div>
      <p className={classes.wds}><a href={props.videoLink} target="_blank" rel="noopener noreferrer">Watch WDS video</a></p>
    </section>
  );
}

export default TopSection;
