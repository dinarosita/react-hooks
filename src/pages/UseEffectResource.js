import { useState, useEffect } from "react";

function UseEffectResourcePage() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log(
        "CLEAN UP: Running return first to clean up previous useEffect run such as the event listener."
      );
    };
  }, [resourceType]);

  return (
    <div>
      <h2>Resource Types</h2>
      <div>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>
      <h3>{resourceType}</h3>
      <div>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </div>
  );
}

export default UseEffectResourcePage;
