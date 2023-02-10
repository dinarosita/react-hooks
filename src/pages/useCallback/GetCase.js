import React from "react";
import classes from "../../styles/Global.module.css";
import fc from "../../styles/Formula.module.css";

import ShowHideButton from "../../tools/ShowHideButton";
import { ShowHideProvider } from "../../tools/ToggleContext";
import GetCaseText from "./GetCaseText";
import GetCasePlain from "./GetCasePlain";
import GetCaseUseCallback from "./GetCaseUseCallback";
import GetCaseParam from "./GetCaseParam";

export default function GetCase() {
  return (
    <section className={classes.mainsection}>
      <h2>Get Item in List Case</h2>

      <GetCasePlain />
      <GetCaseUseCallback />
      <GetCaseParam />
      <p>In this example, const getItems is a function.</p>

      <section className={classes.subsection}>
        <h3>Problem without useCallback</h3>
        <p>
          We want to trigger list update when the number is changed. But instead
          list also gets updated when we toggle theme. This is because getItem
          function gets recreated every time the app component gets rerendered.
          Each time, a new function is recreated, and this is different from the
          previously made one. Even though the number is the same.
        </p>
        <p className={classes.paraTitle}>useCallback as the Solution</p>
        <p>
          Hook useCallback can be used to avoid this. The concept is similar to
          useMemo: only run when certain parameters are changed. This allow
          getItems function to only run when it needs to.
        </p>

        <ShowHideProvider>
          <ShowHideButton textFile=<GetCaseText /> />
        </ShowHideProvider>
      </section>

      <section className={classes.subsection}>
        <h3>Plain - useCallback - useMemo comparison</h3>
        <p className={classes.formulaTitle}>Plain App without hook</p>
        <pre className={classes.formula}>
          const <span className={fc.var}>getItems</span> ={" "}
          <span className={fc.block}>
            () => {"{"} return [num, num+1, num+2] {"}"}
          </span>
        </pre>
        <p className={classes.formulaTitle}>useCallback App</p>

        <pre className={classes.formula}>
          const <span className={fc.var}>getItems</span> ={" "}
          <span className={fc.foc}>
            useCallback(
            <span className={fc.block}>
              () => {"{"} return [num, num+1, num+2] {"}"}
            </span>
            , [num])
          </span>
        </pre>
        <p className={classes.formulaTitle}>Using useMemo will not work</p>
        <p className={classes.paraChild}>
          This will not work because useMemo is not for function
        </p>
        <pre className={classes.formula}>
          const <span className={fc.var}>getItems</span> ={" "}
          <span className={fc.foc}>
            useMemo(
            <span className={fc.block}>
              () => {"{"} return [num, num+1, num+2] {"}"}
            </span>
            , [num])
          </span>
        </pre>
        <p className={classes.formulaTitle}>List.js</p>

        <pre className={classes.formula}>
          <span className={fc.foc}>
            useEffect(
            <span className={fc.block}>
              () => {"{"} setItems(getItems()) {"}"}
            </span>
            , [getItems])
          </span>
        </pre>
      </section>

      <section className={classes.subsection}>
        <h3>Add parameter to useCallback</h3>

        <p className={classes.formulaTitle}>Plain App</p>
        <pre className={classes.formula}>
          const <span className={fc.var}>getItems</span> ={" "}
          <span className={fc.block}>
            (<span className={classes.attention}>inc</span>) => {"{"} return
            [num+
            <span className={classes.attention}>inc</span>, num+1+
            <span className={classes.attention}>inc</span>, num+2+
            <span className={classes.attention}>inc</span>] {"}"}
          </span>
        </pre>
        <p className={classes.formulaTitle}>useCallback App</p>

        <pre className={classes.formula}>
          const <span className={fc.var}>getItems</span> ={" "}
          <span className={fc.foc}>
            useCallback(
            <span className={fc.block}>
              (<span className={classes.attention}>inc</span>) => {"{"} return
              [num+<span className={classes.attention}>inc</span>, num+1+
              <span className={classes.attention}>inc</span>, num+2+
              <span className={classes.attention}>inc</span>] {"}"}
            </span>
            , [num])
          </span>
        </pre>
        <p className={classes.formulaTitle}>List.js</p>
        <pre className={classes.formula}>
          <span className={fc.foc}>
            useEffect(
            <span className={fc.block}>
              () => {"{"} setItems(getItems(
              <span className={classes.attention}>10</span>)) {"}"}
            </span>
            , [getItems])
          </span>
        </pre>
      </section>
    </section>
  );
}
