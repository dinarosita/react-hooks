import { useState, useEffect } from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CleanupText from "./CleanupText";

export default function CleanupCase() {
  const [resourceType, setResourceType] = useState("Posts");

  useEffect(() => {
    console.log(resourceType, " triggered");
    return () => {
      console.log(resourceType, " return");
    };
  }, [resourceType]);

  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Return Cleanup Timing</h2>
        <div className={classes.insertNote}>
          <p>
            This is to illustrate that the return of the previous side effect is
            not run until the next side effect is triggered. Open console to see
            the timing.
          </p>
        </div>
        <div className={classes.cardItem}>
          <div className={classes.displayMulti}>
            <button onClick={() => setResourceType("Posts")}>Posts</button>
            <button onClick={() => setResourceType("Users")}>Users</button>
            <button onClick={() => setResourceType("Comments")}>
              Comments
            </button>
          </div>

          <div>
            <b>{resourceType}</b>
          </div>
        </div>
        <ShowHideProvider>
          <ShowHideButton textFile=<CleanupText /> />
        </ShowHideProvider>
      </div>
    </section>
  );
}
