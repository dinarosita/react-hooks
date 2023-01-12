import UseEffectWidthPage from "./UseEffectWidth";
import UseEffectResourcePage from "./UseEffectResource";
import classes from "./UseState.module.css";

function UseEffectPage() {
  return (
    <section>
        <div>
            <h1>useEffect</h1>
            <ul>
                <li>
                Guide:{" "}
                <a href="https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2">
                    WebDev - Learn useEffect in 13 Minutes
                </a>
                </li>
                <li>
                Note:{" "}
                <a href="https://dinarosita.github.io/codeyluwak/react_useeffect.html">
                    CodeyLuwak: React useEffect
                </a>
                </li>
                <li>App: coding/reactjs/react-hooks</li>
                <li>File:
                    <ul>
                        <li>src/pages/UseEffectWidth.js</li>
                        <li>src/pages/UseEffectResource.js</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className={classes.hookbox}>
            <UseEffectWidthPage />
        </div>
        <div className={classes.hookbox}>
            <UseEffectResourcePage />
        </div>
    </section>
  );
}

export default UseEffectPage;
