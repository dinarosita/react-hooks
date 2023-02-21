import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";

export default function UseIdPageMainNote() {
  return (
    <>
      {/* <p>Id</p> */}
      <pre className={classes.formula}>
        const <span className={fc.var}>id</span> ={" "}
        <span className={fc.foc}>useId()</span>
      </pre>

      <p className={classes.paraTitle}>Solve problem of static and randomized id</p>
      <p>
        When we have the 1 form component getting called multiple of times, if
        we assign a static id, then all the id tagged elements will have
        identical id. As result, when we code an operation to it, for example
        focusing, they will all operate to the first one, even though you
        triggered it from the later ones.
      </p>
      <p>
        A common strategy for handling this is assigning a randomized number to
        the id. However this will be problematic in the page where both server
        and client side do rendering. They each generate a randomized id, and
        that;s not going to be the same, while the id has to be the same.
      </p>
      <p>
        useId is used for this situation. useId generate a unique id in sequence
        within same page rendering. Since each rendering has identical order,
        the unique id generated will be consistent.
      </p>
      <p className={classes.paraTitle}>Refs are still by useRef</p>
      <p>In react, we are not using query selector. So this id is not for that use. For this type of purposes, we are using refs created by useRef hook.</p>
      <p className={classes.paraTitle}>Multiple ids by 1 useId</p>
      <p>If within the component, more than one id is needed, there's no need to create unique id each time. We can use the same same unique code generated by the useId as prefix, and add a unique string to it.</p>

    </>
  );
}
