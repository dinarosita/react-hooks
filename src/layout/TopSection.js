import classes from "./TopSection.module.css";

function TopSection(props) {
  return (
    <section className={classes.mainbody}>
      <h1>use{props.hookType}</h1>
      <ul>
        <li>
          <a href={props.videoLink} target="_blank" rel="noopener noreferrer">WebDev — {props.videoTitle}</a>
        </li>
        <li>
          <a href={props.noteLink} target="_blank" rel="noopener noreferrer">CodeyLuwak — React use{props.hookType}</a>
        </li>
        <li>Hook cases — coding/reactjs/<b>react-hooks</b>/src/hookcases/<b>use{props.hookType}</b></li>
      </ul>
    </section>
  );
}

export default TopSection;
