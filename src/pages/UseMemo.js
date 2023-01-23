import SlowFnWithoutUseMemo from "../hookcases/useMemo/SlowFnWithoutUseMemo";
import SlowFunctionCase from "../hookcases/useMemo/SlowFunctionCase";
import RefWithoutUseMemo from "../hookcases/useMemo/RefWithoutUseMemo";
import ReferenceCase from "../hookcases/useMemo/ReferenceCase";
import TopSection from "../layout/TopSection";
    
import classes from "./UseState.module.css";

function UseMemoPage() {
  return (
    <main>
      <TopSection
        hookType="Memo"
        videoLink="https://www.youtube.com/watch?v=THL1OPn72vo"
        videoTitle="Learn useMemo In 10 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usememo.html"
      />

      <div className={classes.hookbox}>
        <SlowFnWithoutUseMemo />
      </div>
      <div className={classes.hookbox}>
        <SlowFunctionCase />
      </div>
      <div className={classes.hookbox}>
        <RefWithoutUseMemo />
      </div>
      <div className={classes.hookbox}>
        <ReferenceCase />
      </div>
    </main>
  );
}
export default UseMemoPage;
