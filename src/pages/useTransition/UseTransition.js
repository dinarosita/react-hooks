import classes from "../../layout/Page.module.css";
import TopSection from "../../layout/TopSection";
import { ShowHideProvider } from "../../tools/ToggleContext";
import TransitionNotes from "./notes/TransitionNotes";
import ResponsiveForm from "./ResponsiveForm";
import SluggishForm from "./SluggishForm";
import MyResponsiveForm from "./MyResponsiveForm";

function UseTransitionPage() {
  return (
    <main>
      <TopSection
        hookName="Transition"
        videoLink="https://youtu.be/N5R6NL3UE7I?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
        videoTitle="React 18 useTransition Hook Crash Course"
        noteLink="https://dinarosita.github.io/codeyluwak/react_usetransition.html"
      />

      <section className={classes.hookbox}>
        <h2>useTransition</h2>

        <p>
          <b>const [isPending, startTransition] = useTransition()</b>
        </p>
        <p>
          It's a hook to make react app faster and more responsive to improve
          user experience. It works by giving priority to tasks within the
          function, so the higher priority one doesn't need to wait the lower
          priority one. It will render them separately.
        </p>
        <p>
          Only use this hook when it's absolutely needed, because this hook
          cause much more rendering than normal. Can unnecesarrily burdening if
          not actually needed.
        </p>
        <p>Returns 2 values:</p>
        <ul>
          <li>
            1st value <b>isPending</b>: What to do/display instead in the case
            of calculation not ready yet
          </li>
          <li>
            2nd value <b>startTransition</b>: To wrap the low priority
            procedure.
          </li>
        </ul>
      </section>

      <section className={classes.hookbox}>
        <h2>Updating long list</h2>
        <p>Every change in input box triggers 2 actions:</p>
        <ul>
          <li>
            <b>setInput: Updating input value</b> that's displayed back at the
            input box. This needs to be happened instantly so the user doesn't
            feel lagged from merely typing in letters. It needs to be
            "responsive" for a good user experience.
          </li>
          <li>
            <b>setList: Updating a list of 15000</b>. Each keystroke triggers a
            new list formation, then the value of the input box is pushed 15000
            times to it. Then the old list is replaced by this list. This
            process is slow and it's okay to be slow as this an "update" is not
            something user expects to be responsive.
          </li>
        </ul>

        <div className={classes.flexbox}>
          <div>
            <h3>Sluggish design without useTransition</h3>
            <SluggishForm />
          </div>
          <div>
            <h3>Responsive design with useTransition</h3>
            <ResponsiveForm />
          </div>
          <div>
            <h3>My responsive form</h3>
            <MyResponsiveForm />
          </div>
        </div>
        <p>Try typing something really long, like 2 sentences.</p>
        <ShowHideProvider>
          <TransitionNotes />
        </ShowHideProvider>
      </section>
    </main>
  );
}

export default UseTransitionPage;
