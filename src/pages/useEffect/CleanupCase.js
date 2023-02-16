import { useState, useEffect } from "react";
import classes from "../../styles/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import CleanupCaseText from "./CleanupCaseText";

export default function CleanupCase() {
  const [resourceType, setResourceType] = useState("Posts");

  useEffect(() => {
    console.log(resourceType, " triggered");
    return () => {
      console.log(resourceType, " return");
    };
  }, [resourceType]);

  return (
    <section className={classes.mainsection}>
      <h2>Return Cleanup Timing</h2>

      <p>
        This is to illustrate that the return of the previous side effect is not
        run until the next side effect is triggered. Open console to see the
        timing.
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
      </div>
      <ShowHideProvider>
        <ShowHideButton textFile=<CleanupCaseText /> />
      </ShowHideProvider>
    </section>
  );
}
