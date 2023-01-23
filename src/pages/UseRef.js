import RenderCase from "../hookcases/useRef/RenderCase";
import PrevValCase from "../hookcases/useRef/PrevValCase";
import FocusCase from "../hookcases/useRef/FocusCase";
import MistakeCase from "../hookcases/useRef/MistakeCase";

import TopSection from "../layout/TopSection";

import classes from "./UseState.module.css";

function UseRefPage() {
  return (
    <main>
      <TopSection
        hookType="Ref"
        videoLink="https://www.youtube.com/watch?v=t2ypzz6gJm0"
        videoTitle="Learn useRef In 11 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_useref.html"
      />

      <div className={classes.hookbox}>
        <RenderCase />
      </div>
      <div className={classes.hookbox}>
        <PrevValCase />
      </div>
      <div className={classes.hookbox}>
        <FocusCase />
      </div>
      <div className={classes.hookbox}>
        <MistakeCase />
      </div>

    </main>
  );
}
export default UseRefPage;
