import classes from "../Generic.module.css";
import TopSection from "../../layout/TopSection";
import { ToggleCodeProvider } from "../../tools/ToggleCodeContext";
import GetItemsWithoutCallback from "./GetItemsWithoutCallback";
import GetItemsUseCallback from "./GetItemsUseCallback";
import UseCallbackNote from "./notes/UseCallbackNote";
import GetItemsExtraParam from "./GetItemsExtraParam";

export default function useCallbackPage() {
  return (
    <main>
      <TopSection
        hookType="Callback"
        videoLink="https://youtu.be/_AyFP5s69N4?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
        videoTitle="Learn useCallback in 8 Minutes"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usecallback.html"
      />

      <div className={classes.hookbox}>
        <h2>Get Items</h2>
        <div className={classes.flexbox}>
          <div>
            <GetItemsWithoutCallback />
          </div>
          <div>
            <GetItemsUseCallback />
          </div>
          <div>
            <GetItemsExtraParam />
          </div>
        </div>

        <ToggleCodeProvider>
          <UseCallbackNote />
        </ToggleCodeProvider>
      </div>
    </main>
  );
}
