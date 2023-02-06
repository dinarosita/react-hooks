import classes from "../../layout/Global.module.css";
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
       

      </section>

      <section className={classes.hookbox}>
        <h2>Updating long list</h2>
        

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
