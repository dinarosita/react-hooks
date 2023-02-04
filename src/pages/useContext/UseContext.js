import PreThemeApp from "./pretheme/PreThemeApp";
import ThemeApp from "./theme/ThemeApp";
import MyThemeApp from "./mytheme/MyThemeApp";
import TopSection from "../../layout/TopSection";

import { ShowHideProvider } from "../../tools/ToggleContext"
import FunctionVsClassButton from "./notes/FunctionVsClassButton";
import SimplifyFunctionButton from "./notes/SimplifyFunctionButton";

import classes from "./UseContext.module.css";

function UseContextPage() {
  return (
    <main>
      <TopSection
        hookName="Context"
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
          <ShowHideProvider>
            <FunctionVsClassButton />
          </ShowHideProvider>
        </div>

        <div className={classes.hookbox}>
          <h3>Simplifying Function Context Component with Custom Hooks</h3>
          <p>
            Class context component coding is multilayered and much more
            complicated than function contect component.
          </p>

          <ThemeApp />
          <ShowHideProvider>
            <SimplifyFunctionButton />
          </ShowHideProvider>
        </div>

        <div className={classes.hookbox}>
          <h3>Dina Theme App</h3>

          <MyThemeApp />

          
        </div>
      </section>
      <section>
        <h2>Toggle Display Codes Using Context</h2>
        <div className={classes.hookbox}>
            Check out show/hide code buttons above.
        </div>
      </section>
    </main>
  );
}
export default UseContextPage;
