import { useState, useEffect } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import ResourceCaseText from "./ResourceCaseText";

export default function ResourceCase() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <section className={classes.mainsection}>
      <h2>Resource Types Case</h2>
      <p>
        The side effect of changing state of the resource type is fetching item
        list correspond to the type and isplayed in the screen. This one doesn't
        require return clean up.
      </p>
      <div className={classes.scriptrun}>
        <div className={classes.hFlex}>
          <button onClick={() => setResourceType("Posts")}>Posts</button>
          <button onClick={() => setResourceType("Users")}>Users</button>
          <button onClick={() => setResourceType("Comments")}>Comments</button>
        </div>

        <div>
          <b>{resourceType}</b>
        </div>
        <div className={classes.overflowBox}>
          {items.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
          })}
        </div>
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<ResourceCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
