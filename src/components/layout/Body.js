import classes from "./Body.module.css";

function Body(props) {
  return (
    <section className={classes.mainbody}>
      <h1>use{props.hookType}</h1>
      <ul>
        <li>
          <a href={props.videoLink}>WebDev — {props.videoTitle}</a>
        </li>
        <li>
          <a href={props.noteLink}>CodeyLuwak — React use{props.hookType}</a>
        </li>
        <li>Codes — coding/reactjs/<b>react-hooks</b>/src/pages/Use{props.hookType}*.js</li>
      </ul>
    </section>
  );
}

export default Body;
