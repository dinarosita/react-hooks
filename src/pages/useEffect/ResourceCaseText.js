import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function ResourceCaseText() {
  const title1 = "ResourceCase.js";
  const text1 = String.raw`export default function ResourceCase() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(${"`"}https://jsonplaceholder.typicode.com/$${"{"}resourceType${"}"}${"`"})
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <div>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>

      <div><b>{resourceType}</b></div>
        <div>
          {items.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
          })}
        </div>
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
