import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";

export default function UseDebugValueMainNote() {
  return (
    <>
      <p>
        React hook component values can easily be tracked in DevTool's
        "Components" tab (install React extension for DevTool). Find the app in
        focus in the DOM tree, and "hooks" section in the display. It lists all
        the hooks used in the app, and handily showing their value right next to
        it. It even works for custom hooks too. However just as is, custom hooks
        doesn't display any value right next to it, values can be accessed by
        clicking it. This is not very visually handy. Hook useDebugValue let us
        choose and display values right next to the hook.
      </p>
      <p className={classes.feedbackTitle}>Inside custom hook function:</p>
      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>var</span>)
        </span>
      </pre>

      <p className={classes.feedbackTitle}>Without useDebugValue:</p>
      <pre className={classes.feedback}>
        <span className={fc.block}>
          <b>Hooks:</b>
          <br />
          useLocalStorage:{"      "}
          <br />
          useState: value
        </span>
      </pre>

      <p className={classes.feedbackTitle}>With useDebugValue:</p>
      <pre className={classes.feedback}>
        <span className={fc.block}>
          <b>Hooks:</b>
          <br />
          useLocalStorage: value
          <br />
          useState: value
        </span>
      </pre>

      <p className={classes.paraTitle}>The hook can be used multiple times</p>
      <p>
        This hook can be used multiple of times. T he multiple results will be
        displayed as an array.
      </p>

      <p className={classes.paraTitle}>
        The hook can take various type of properties
      </p>
      <p>
        The hook can take anything as properties, not just variables. For
        example, it can be strings, object, or array. Which also means the hook
        can accept an array of values as property.
      </p>

      <p className={classes.paraTitle}>Simple 2 value display</p>

      <p>
        We can use the hook for them individually, or arrange them together in
        an array.
      </p>
      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>var1</span>)
          <br />
          useDebugValue(
          <span className={fc.var}>var2</span>)
        </span>
      </pre>
      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>[var1, var2]</span>)
        </span>
      </pre>

      <pre className={classes.feedback}>
        <span className={fc.block}>
          <b>Hooks:</b>
          <br />
          useLocalStorage: [value1, value2]
        </span>
      </pre>

      <p className={classes.paraTitle}>Complex arrangements</p>
      <p>It can be made as complex as nested it needs to be. For example:</p>

      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>"Hi"</span>)
          <br />
          useDebugValue(
          <span className={fc.var}>
            {"{"}var1, var2{"}"}
          </span>
          )
        </span>
      </pre>
      <pre className={classes.feedback}>
        <span className={fc.block}>
          <b>Hooks:</b>
          <br />
          useLocalStorage: ["Hi", {"{"}...{"}"}]
        </span>
      </pre>

      <p className={classes.paraTitle}>
        Performance help: the hook's second argument
      </p>
      <p>
        It can cause the page to be slow if it contained a slow process, because
        it will get rendered each time. This hook actually can take 2 arguments,
        with the second argument being a function that takes in the first
        argument.
      </p>
      <p className={classes.formulaTitle}>Instead of using slow function directly:</p>
      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>slowFunction(value)</span>)
        </span>
      </pre>

      <p className={classes.formulaTitle}>Use second argument:</p>

      <pre className={classes.formula}>
        <span className={fc.foc}>
          useDebugValue(<span className={fc.var}>value</span>,{" "}
          <span className={fc.var}>v => slowFunction(v)</span>)
        </span>
      </pre>
      <p>
        "Only run this function in development or if I have the DevTool open to
        be able to see what the result is. Otherwise, don't run this function at
        all."
      </p>
    </>
  );
}
