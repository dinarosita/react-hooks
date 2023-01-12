import UseMemoWithoutPage from "./UseMemoWithout";
import UseMemoSlowFixPage from "./UseMemoSlowFix";
import classes from "./UseState.module.css";

function UseMemoPage() {
  return (
    <section>
      <h1>useMemo</h1>
      <ul>
        <li>
          Guide:{" "}
          <a href="https://www.youtube.com/watch?v=THL1OPn72vo">
            WebDev - Learn useMemo In 10 Minutes
          </a>
        </li>
        <li>
          Note:{" "}
          <a href="https://dinarosita.github.io/codeyluwak/react_usememo.html">
            CodeyLuwak: React useMemo
          </a>
        </li>
        <li>App: coding/reactjs/react-hooks</li>
        <li>File:
            <ul>
                <li>src/pages/UseMemoWithout.js</li>
                <li>src/pages/UseMemoSlowFix.js</li>
            </ul>
        </li>
      </ul>
      
      <div className={classes.hookbox}>
            <UseMemoWithoutPage />
        </div>
        <div className={classes.hookbox}>
            <UseMemoSlowFixPage />
        </div>
    </section>
  );
}
export default UseMemoPage;
