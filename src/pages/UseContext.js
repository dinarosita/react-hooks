import PreThemeApp from "../hookcases/useContext/pretheme/PreThemeApp";
import ThemeApp from "../hookcases/useContext/theme/ThemeApp";
import DinaThemeApp from "../hookcases/useContext/dinatheme/DinaThemeApp";
import TopSection from "../layout/TopSection";

import classes from "./UseContext.module.css";
import { DisplayProvider } from "../hookcases/useContext/display/DisplayContext";
import PreThemeNotes from "../hookcases/useContext/display/PreThemeNotes";

function UseContextPage() {
  return (
    <main>
      <TopSection
        hookType="Context"
        videoLink="https://www.youtube.com/watch?v=5LrDIWkK_Bc"
        videoTitle="Learn useContext In 13 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usecontext.html"
      />
      <section>
        <h2>Toggle Theme Using Context</h2>

        <div className={classes.hookbox}>
          <h3>Function vs Class Context Component</h3>
          <p>
            Class context component coding is multilayered and much more
            complicated than function contect component. Compare the codes.
          </p>

          <PreThemeApp />
          <DisplayProvider>
            <PreThemeNotes />
          </DisplayProvider>
        </div>

        <div className={classes.hookbox}>
          <h3>Simplifying Function Context Component with Custom Hooks</h3>
          <p>
            Class context component coding is multilayered and much more
            complicated than function contect component.
          </p>

          <ThemeApp />
        </div>

        <div className={classes.hookbox}>
          <h3>Dina Theme App</h3>

          <DinaThemeApp />
        </div>
      </section>
      <section>
        <h2>Toggle Display Codes Using Context</h2>
        <div className={classes.hookbox}>
          <DisplayProvider>
            <PreThemeNotes />
          </DisplayProvider>
        </div>
      </section>
    </main>
  );
}
export default UseContextPage;
