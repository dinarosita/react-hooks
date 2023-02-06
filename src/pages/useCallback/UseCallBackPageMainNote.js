import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseCallbackPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        This hook cache a function definition between rerenders. It works like
        useMemo, but for functions. The variable sets with useMemo will get the
        return value as the new value. With useCallback, the variable is set
        with the entire function.
      </p>

      <pre className={classes.formula}>
        const <span className={classes.variable}>callbackVal</span> ={" "}
        <span className={classes.thehook}>useCallback</span>(
        <span className={classes.variable}>callbackFunction</span>,{" "}
        <span className={classes.variable}>[dependencies]</span>)
      </pre>
      <dl className={classes.dlMain}>
        <dt>
          Consider <code>useMemo</code> first
        </dt>
        <dd>
          In practise, this hook is rarely needed. Usually it's the final value
          we want to remember. So typically <code>useMemo</code> is what we
          need. But occassionally, we need to cache the whole function, not just
          the final value. For example, when the function takes extra parameter,
          like in the example below. Only <code>useCallback</code> can do this,{" "}
          <code>useMemo</code>can't. However this is a very rare occurence. In
          most cases what we worry about is referential equality, and it's{" "}
          <code>useMemo</code>'s job.
        </dd>
        <dt>Generating new functions</dt>
        <dd>
          Another reason useCallback is if we actually need to create new
          function depending on the parameters. However this is probably not
          something we will encounter.
        </dd>
      </dl>
    </div>
  );
}
