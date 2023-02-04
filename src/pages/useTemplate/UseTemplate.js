import classes from "../../layout/Page.module.css";
import TopSection from "../../layout/TopSection";
import { ShowHideProvider } from "../../tools/ToggleContext";
import UseTemplateNotes from "./notes/Notes";
import Case from "./Case";
import Notes from "./notes/Notes";

function UseTemplatePage() {
  return (
    <main>
      <TopSection
        hookName="Template"
        videoLink=""
        videoTitle="Learn useTemplate in x Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usetemplate.html"
      />

      <section className={classes.hookbox}>
        <h2>Case 1</h2>
        <div className={classes.flexbox}>
          <div>
            <h3>Case</h3>
            <Case />
          </div>
          <div>
            <h3>Case</h3>
            <Case />
          </div>
        </div>

        <ShowHideProvider>
          <Notes />
        </ShowHideProvider>
      </section>
    </main>
  );
}

export default UseTemplatePage;
