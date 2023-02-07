import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseContextPageMainNote() {
  return (
    <div className={classes.insertNote}>
      <p>
        Hook <code>useContext</code> allowing a context (with values within) to
        be used globally by en element and all of its descendants.
      </p>

      <pre className={classes.formula}>
        const <span className={classes.variable}>darkTheme</span> ={" "}
        <span className={classes.thehook}>
          useContext(<span className={classes.variable}>ThemeContext</span>)
        </span>
      </pre>

      <p>Create and export theme</p>
      <pre className={classes.formula}>
        export const <span className={classes.variable}>ThemeContext</span> =
        React.createContext()
      </pre>

      <p>Use it as global parent in return block</p>
      <pre className={classes.formula}>
        &lt;<span className={classes.variable}>ThemeContext</span>.Provider{" "}
        <span className={classes.prop}>
          value={"{"}
          <span className={classes.value}>darkTheme</span>
          {"}"}
        </span>
        <span className={classes.codeblock}>
          &gt;
          <br />
          {"  "}...child...
          <br />
          &lt;
        </span>
        <span className={classes.variable}>ThemeContext</span>.Provider&gt;
      </pre>
      <p className={classes.footage}>
        <a
          href="https://dinarosita.github.io/codeyluwak/react_usecontext.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more in Codeyluwak
        </a>
      </p>
    </div>
  );
}
