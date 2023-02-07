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

          <dl className={classes.dlMain}>
            <dt>Problem without useCallback</dt>
            <dd>
              We want to trigger list update when the number is changed. But
              instead list also gets updated when we toggle theme. This is
              because getItem function gets recreated every time the app
              component gets rerendered. Each time, a new function is recreated,
              and this is different from the previously made one. Even though
              the number is the same.
            </dd>

            <dt>useCallback as the Solution</dt>
            <dd>
              Hook useCallback can be used to avoid this. The concept is similar
              to useMemo: only run when certain parameters are changed. This
              allow getItems function to only run when it needs to.
            </dd>
          </dl>
        </div>
        
        <ShowHideProvider>
          <ShowHideButton textFile=<GetCaseText /> />
        </ShowHideProvider>

        <div className={classes.insertNote}>
          <h3>Plain - useCallback - useMemo comparison</h3>

          <dl className={classes.dlTabCompact}>
            <dt>Plain App without hook</dt>
            <dd>
              <pre className={classes.codeSnippet}>
                const <span className={classes.variable}>getItems</span> ={" "}
                <span className={classes.codeblock}>
                  () => {"{"} return [num, num+1, num+2] {"}"}
                </span>
              </pre>
            </dd>

            <dt>useCallback App</dt>
            <dd>
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
            </dd>
            <dt>Using useMemo will not work</dt>
            <dd>This will not work because useMemo is not for function</dd>
            <dd>
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
            </dd>

            <dt>List.js</dt>
            <dd>
              <pre className={classes.codeSnippet}>
                <span className={classes.thehook}>
                  useEffect(
                  <span className={classes.codeblock}>
                    () => {"{"} setItems(getItems()) {"}"}
                  </span>
                  , [getItems])
                </span>
              </pre>
            </dd>
          </dl>
          <dl className={classes.dlRegular}></dl>

          <h3>Add parameter to useCallback</h3>
          
          <dl className={classes.dlTabCompact}>
            <dt>Plain App</dt>
            <dd>
              <pre className={classes.codeSnippet}>
                const <span className={classes.variable}>getItems</span> ={" "}
                <span className={classes.codeblock}>
                  (<span className={classes.attention}>inc</span>) => {"{"}{" "}
                  return [num+<span className={classes.attention}>inc</span>,
                  num+1+<span className={classes.attention}>inc</span>, num+2+
                  <span className={classes.attention}>inc</span>] {"}"}
                </span>
              </pre>
            </dd>

            <dt>useCallback App</dt>
            <dd>
              <pre className={classes.codeSnippet}>
                const <span className={classes.variable}>getItems</span> ={" "}
                <span className={classes.thehook}>
                  useCallback(
                  <span className={classes.codeblock}>
                    (<span className={classes.attention}>inc</span>) => {"{"} return [num+<span className={classes.attention}>inc</span>, num+1+<span className={classes.attention}>inc</span>, num+2+<span className={classes.attention}>inc</span>] {"}"}
                  </span>
                  , [num])
                </span>
              </pre>
            </dd>

            <dt>List.js</dt>
            <dd>
              <pre className={classes.codeSnippet}>
                <span className={classes.thehook}>
                  useEffect(
                  <span className={classes.codeblock}>
                    () => {"{"}{" "}
                    setItems(getItems(<span className={classes.attention}>10</span>)) {"}"}
                  </span>
                  , [getItems])
                </span>
              </pre>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
