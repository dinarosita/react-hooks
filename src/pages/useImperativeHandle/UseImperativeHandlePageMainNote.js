import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseImperativeHandlePageMainNote() {
  return (
    <>
      <p>
        Prerequisite: <code>useRef</code> for custom component.
      </p>

      <p><code>useRef</code> works great for passing one ref
        directly to single element inside a component. However if we want to change
        completely how ref works, or have a custom ref that's not
        related to the component, a custom ref is needed. Hook <code>useImperativeHandle</code> is used to make such custom ref.
      </p>

      <pre className={classes.formula}>
        <span className={fc.foc}>
          useImperativeHandle(<span className={fc.prop}>ref</span>,{" "}
          <span className={fc.fn}>createHandle</span>,{" "}
          <span className={fc.dep}>[dependencies]</span>)
        </span>
      </pre>

      <p className={classes.paraTitle}>3
        properties:
      </p>
      <ul>
        <li>
          <code>ref</code>: the ref we want to completely overwrite. Now we
          don't need to pass it to our input manually.
        </li>
        <li>
          Function <code>createHandle</code>. It turns a single value: the new
          value for our ref
        </li>
        <li>
          Optional <code>[dependencies]</code>
          <ul>
            <li>Pass nothing: refresh the value every render</li>
            <li>Pass empty array: refresh once</li>
            <li>Pass dependencies: refresh when any dependency value change</li>
          </ul>
        </li>
      </ul>

      <p className={classes.paraTitle}>Usage</p>
      <p>It should not be used very often at all. Only in very specific cases we should use it. In our confirmation modal case, we will see how it is used to handle group ref. 3 different button refs arranged as 1.</p>
    </>
  );
}
