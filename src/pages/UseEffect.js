import UseEffectWidthPage from "./UseEffectWidth";
import UseEffectResourcePage from "./UseEffectResource";
import classes from "./UseState.module.css";
import Body from "../components/layout/Body";

function UseEffectPage() {
  return (
    <section>
      <Body
        hookType="Effect"
        videoLink="https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=6s"
        videoTitle="Learn useEffect in 13 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_useeffect.html"
      />

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
