import { useState } from "react";
import classes from "./UseState.module.css";

function UseStatePage() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  const codeText = `  import { useState } from "react";
  import classes from "./UseState.module.css";
  
  function UseStatePage() {
    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState("blue");
  
    function decrementCount() {
      setCount((prevCount) => prevCount - 1);
    }
  
    function incrementCount() {
      setCount((prevCount) => prevCount + 1);
      setTheme("red");
    }
  
    return (
      <section>
        <h1>useState</h1>
        <button onClick={decrementCount}>
          -
        </button>
        <span>
          {count} {theme}
        </span>
        <button onClick={incrementCount}>
          +
        </button>
      </section>
    );
  }
  
  export default UseStatePage;
  `;

  return (
    <section>
      <h1>useState</h1>
      <p>
        Source: <a href="https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=1">
          Web Dev Simplified: Learn useState in 15 Minutes
        </a>
      </p>
      <div className={classes.hookbox}>
        <button onClick={decrementCount}>
          -
        </button>
        <span>
          {count} {theme}
        </span>
        <button onClick={incrementCount}>
          +
        </button>
      </div>

      <div>
        <h2>Code</h2>
        <pre>{codeText}</pre>
      </div>
    </section>
  );
}

export default UseStatePage;
