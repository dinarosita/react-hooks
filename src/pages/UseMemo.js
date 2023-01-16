import UseMemoWithoutPage from "./UseMemoWithout";
import UseMemoSlowFixPage from "./UseMemoSlowFix";
import Body from "../components/layout/Body";
    
import classes from "./UseState.module.css";

function UseMemoPage() {
  return (
    <section>
      <Body
        hookType="Memo"
        videoLink="https://www.youtube.com/watch?v=THL1OPn72vo"
        videoTitle="Learn useMemo In 10 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usememo.html"
      />

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
