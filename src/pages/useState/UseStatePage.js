import UseStateAbout from "./UseStateAbout";
import IncrementCase from "./IncrementCase";
import PowerCase from "./PowerCase";
import classes from "../../layout/CaseApp.module.css";

function UseStatePage() {
  return (
    <main>
      <UseStateAbout />
      <section className={classes.case}>
        <IncrementCase />
      </section>
      <section className={classes.case}>
        <PowerCase />
      </section>
    </main>
  );
}

export default UseStatePage;
