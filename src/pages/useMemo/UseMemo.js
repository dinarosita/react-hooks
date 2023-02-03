import SlowFnWithoutUseMemo from "./SlowFnWithoutUseMemo";
import SlowFunctionCase from "./SlowFunctionCase";
import RefWithoutUseMemo from "./RefWithoutUseMemo";
import ReferenceCase from "./ReferenceCase";
import TopSection from "../../layout/TopSection";

import classes from "../Generic.module.css";

function UseMemoPage() {
  const text1 = String.raw`const lastReturn = useMemo(() => {
    ...
    return theReturn
}, [dependencies])`;
  return (
    <main>
      <TopSection
        hookType="Memo"
        videoLink="https://www.youtube.com/watch?v=THL1OPn72vo"
        videoTitle="Learn useMemo In 10 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usememo.html"
      />
      <section className={classes.hookbox}>
        <h2>useMemo</h2>
        <p>
          Hook useMemo can be used to memoize the result of such slow function.
          The result is cached. In the next rendering, the dependencies will be
          checked. If they all stayed the same, previously cached result will be
          used. Only if they are different, it will be run. This way, the slow
          function doesn't slow down other processes unnecessarily. Only if
          there's change in dependencies, the slow function is called.
          Otherwise, previous the Hook useMemo is used for caching result of
          double function. Changing theme now can be fast because slow function
          is not rerendered.
        </p>
        <pre className={classes.borderedbox}>{text1}</pre>
      </section>
      <section className={classes.hookbox}>
        <h2>Slow function</h2>
        <p>
          Double number function is made slow. WHen number is changed, rendering
          will be slow. Changing theme alone is fast, however since everything
          got rerendered, and double function is slow, changing theme becoming
          slow too.
        </p>
        <div className={classes.flexbox}>
          <div className={classes.hookbox}>
            <SlowFnWithoutUseMemo />
          </div>
          <div className={classes.hookbox}>
            <SlowFunctionCase />
          </div>
        </div>
      </section>
      <section className={classes.hookbox}>
        <h2>Referential variable</h2>
        <p>
          Even when triggered by number change, theme is considered changing
          too. This is because themeStyles is an object variable, and the value
          is actually just the reference to the place where the value located.
        </p>
        <p>
          Hook useMemo can be used to remember the last rendering result of the
          dependencies. In this case, the value itself, not just the reference.
          If the value stays the same, the cached result will be used.
          Otherwise, it will be rerendered.
        </p>
        <div className={classes.flexbox}>
          <div className={classes.hookbox}>
            <RefWithoutUseMemo />
          </div>
          <div className={classes.hookbox}>
            <ReferenceCase />
          </div>
        </div>

        <p>
          The render counter (without useMemo) come with warning: The
          'themeStyles' object makes the dependencies of useEffect Hook (at line
          19) change on every render. To fix this, wrap the initialization of
          'themeStyles' in its own useMemo() Hook.
        </p>
      </section>
    </main>
  );
}
export default UseMemoPage;
