import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function CleanupCaseText() {
  const title1 = "ResourceCase.js";
  const text1 = String.raw`export default function ResourceCase() {
  const [resourceType, setResourceType] = useState("Posts");

  useEffect(() => {
    console.log(resourceType, " triggered");
    return () => { console.log(resourceType, " return") }
  }, [resourceType]);

  return (
    <div>
      <div>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>
      <div><b>{resourceType}</b></div>
    </div>
  );
}`;

  return (
    <div className={classes.hFlex}>
        <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
    </div>
  );
}
