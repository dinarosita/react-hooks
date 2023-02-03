import WidthCase from "./WidthCase";
import ResourceCase from "./ResourceCase";
import classes from "../Generic.module.css";
import TopSection from "../../layout/TopSection";

function UseEffectPage() {
  return (
    <main>
      <TopSection
        hookType="Effect"
        videoLink="https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=6s"
        videoTitle="Learn useEffect in 13 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_useeffect.html"
      />
      <section className={classes.hookbox}>
        <h2>useEffect</h2>
        <p>
          This hook is for triggering side effect to happen in respond to
          changes in its dependencies.
        </p>

        <pre className={classes.formula}>
          <span className={classes.emp}>useEffect</span>(() => &#123;
          <span className={classes.var}>...codes...</span>&#125;, [
          <span className={classes.var}>dependencies</span>])
        </pre>
      </section>
      <section className={classes.hookbox}>
        <WidthCase />
      </section>
      <section className={classes.hookbox}>
        <ResourceCase />
      </section>
    </main>
  );
}

export default UseEffectPage;
