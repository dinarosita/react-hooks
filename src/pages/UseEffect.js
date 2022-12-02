import { useState, useEffect } from "react";
import classes from "./UseEffect.module.css";

function UseEffectPage() {
  const [resourceType, setResourceType] = useState("posts");
  const codeText = `import { useState, useEffect } from "react";
import classes from "./UseEffect.module.css";

function UseEffectPage() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <section>
      <div>
        <div>
          <button onClick={() => setResourceType("posts")}>Posts</button>
          <button onClick={() => setResourceType("users")}>Users</button>
          <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>
        <h2>{resourceType}</h2>
      </div>      
    </section>
  );
}

export default UseEffectPage;
`;

  return (
    <section>
      <h1>useEffect</h1>
      <p>
        Source:{" "}
        <a href="https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2">
          Web Dev Simplified: Learn useEffect in 13 Minutes
        </a>
      </p>
      <div className={classes.hookbox}>
        <div>
          <button onClick={() => setResourceType("posts")}>Posts</button>
          <button onClick={() => setResourceType("users")}>Users</button>
          <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>
        <h2>{resourceType}</h2>
      </div>
      <div>
        <h2>Code</h2>
        <pre>{codeText}</pre>
      </div>
    </section>
  );
}

export default UseEffectPage;
