import React from "react";
import classes from "../../layout/Global.module.css";
import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import GetCaseText from "./GetCaseText";
import GetCasePlain from "./GetCasePlain";
import GetCaseUseCallback from "./GetCaseUseCallback";
import GetCaseParam from "./GetCaseParam";

export default function GetCase() {
  return (
    <section>
      <div className={classes.niceFlow}>
        <h2>Get Item in List Case</h2>

        <div className={classes.cardGroup}>
          <GetCasePlain />
          <GetCaseUseCallback />
          <GetCaseParam />
        </div>
        <div className={classes.insertNote}>
          <p>In this example, const getItems is a function.</p>
          <p className={classes.paraTitle}>Problem without useCallback</p>
          <p>
            We want to trigger list update when the number is changed. But
            instead list also gets updated when we toggle theme. This is because
            getItem function gets recreated every time the app component gets
            rerendered. Each time, a new function is recreated, and this is
            different from the previously made one. Even though the number is
            the same.
          </p>
          <p className={classes.paraTitle}>useCallback as the Solution</p>
          <p>
            Hook useCallback can be used to avoid this. The concept is similar
            to useMemo: only run when certain parameters are changed. This allow
            getItems function to only run when it needs to.
          </p>
        </div>

        <ShowHideProvider>
          <ShowHideButton textFile=<GetCaseText /> />
        </ShowHideProvider>

        <div className={classes.insertNote}>
          <h3>Plain - useCallback - useMemo comparison</h3>
          <p className={classes.boxTitleRed}>Plain App without hook</p>
          <pre className={classes.codeSnippet}>
            const <span className={classes.variable}>getItems</span> ={" "}
            <span className={classes.codeblock}>
              () => {"{"} return [num, num+1, num+2] {"}"}
            </span>
          </pre>
          <p className={classes.boxTitleRed}>useCallback App</p>

          <pre className={classes.codeSnippet}>
            const <span className={classes.variable}>getItems</span> ={" "}
            <span className={classes.thehook}>
              useCallback(
              <span className={classes.codeblock}>
                () => {"{"} return [num, num+1, num+2] {"}"}
              </span>
              , [num])
            </span>
          </pre>
          <p className={classes.boxTitleRed}>Using useMemo will not work</p>
          <p className={classes.paraChild}>
            This will not work because useMemo is not for function
          </p>
          <pre className={classes.codeSnippet}>
            const <span className={classes.variable}>getItems</span> ={" "}
            <span className={classes.thehook}>
              useMemo(
              <span className={classes.codeblock}>
                () => {"{"} return [num, num+1, num+2] {"}"}
              </span>
              , [num])
            </span>
          </pre>
          <p className={classes.boxTitleRed}>List.js</p>

          <pre className={classes.codeSnippet}>
            <span className={classes.thehook}>
              useEffect(
              <span className={classes.codeblock}>
                () => {"{"} setItems(getItems()) {"}"}
              </span>
              , [getItems])
            </span>
          </pre>
          <dl className={classes.dlRegular}></dl>

          <h3>Add parameter to useCallback</h3>

          <p className={classes.boxTitleRed}>Plain App</p>
          <pre className={classes.codeSnippet}>
            const <span className={classes.variable}>getItems</span> ={" "}
            <span className={classes.codeblock}>
              (<span className={classes.attention}>inc</span>) => {"{"} return
              [num+<span className={classes.attention}>inc</span>, num+1+
              <span className={classes.attention}>inc</span>, num+2+
              <span className={classes.attention}>inc</span>] {"}"}
            </span>
          </pre>
          <p className={classes.boxTitleRed}>useCallback App</p>

          <pre className={classes.codeSnippet}>
            const <span className={classes.variable}>getItems</span> ={" "}
            <span className={classes.thehook}>
              useCallback(
              <span className={classes.codeblock}>
                (<span className={classes.attention}>inc</span>) => {"{"} return
                [num+<span className={classes.attention}>inc</span>, num+1+
                <span className={classes.attention}>inc</span>, num+2+
                <span className={classes.attention}>inc</span>] {"}"}
              </span>
              , [num])
            </span>
          </pre>
          <p className={classes.boxTitleRed}>List.js</p>
          <pre className={classes.codeSnippet}>
            <span className={classes.thehook}>
              useEffect(
              <span className={classes.codeblock}>
                () => {"{"} setItems(getItems(
                <span className={classes.attention}>10</span>)) {"}"}
              </span>
              , [getItems])
            </span>
          </pre>
        </div>
      </div>
    </section>
  );
}
