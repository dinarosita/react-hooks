import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseCallbackPageMainNote() {
  return (
    <>
      <p>
        This hook cache a function definition between rerenders. It works like
        useMemo, but for functions. The variable sets with useMemo will get the
        return value as the new value. With useCallback, the variable is set
        with the entire function.
      </p>

      <pre className={classes.formula}>
        const <span className={fc.var}>cachedFn</span> ={" "}
        <span className={fc.foc}>
          useCallback(
          <span className={fc.fn}>callbackFn</span>,{" "}
          <span className={fc.dep}>[dependencies]</span>)
        </span>
      </pre>
      <p className={classes.paraTitle}>
        Consider <code>useMemo</code> first
      </p>
      <p>
        In practise, this hook is rarely needed. Usually it's the final value we
        want to remember. So typically <code>useMemo</code> is what we need. But
        occassionally, we need to cache the whole function, not just the final
        value. For example, when the function takes extra parameter, like in the
        example below. Only <code>useCallback</code> can do this,{" "}
        <code>useMemo</code>can't. However this is a very rare occurence. In
        most cases what we worry about is referential equality, and it's{" "}
        <code>useMemo</code>'s job.
      </p>
      <p className={classes.paraTitle}>Generating new functions</p>
      <p>
        Another reason useCallback is if we actually need to create new function
        depending on the parameters. However this is probably not something we
        will encounter.
      </p>
    </>
  );
}
