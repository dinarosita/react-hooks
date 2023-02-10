import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css"

export default function UseImperativeHandlePageMainNote() {
  return (
    <div className={classes.insertNote}>
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

      <p>
        <code>useImperativeHandle</code> is a way to make custom ref. It takes 3
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
    </div>
  );
}
