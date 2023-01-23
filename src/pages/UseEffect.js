import WidthCase from "../hookcases/useEffect/WidthCase";
import ResourceCase from "../hookcases/useEffect/ResourceCase";
import classes from "./UseState.module.css";
import TopSection from "../layout/TopSection";

function UseEffectPage() {
  return (
    <main>
      <TopSection
        hookType="Effect"
        videoLink="https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=6s"
        videoTitle="Learn useEffect in 13 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_useeffect.html"
      />

      <div className={classes.hookbox}>
        <WidthCase />
      </div>
      <div className={classes.hookbox}>
        <ResourceCase />
      </div>
    </main>
  );
}

export default UseEffectPage;
