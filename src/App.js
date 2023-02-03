import { Route, Switch} from "react-router-dom";

import Layout from "./layout/Layout.js";
import UseStatePage from "./pages/useState/UseState";
import UseEffectPage from "./pages/useEffect/UseEffect";
import UseMemoPage from "./pages/useMemo/UseMemo";
import UseRefPage from "./pages/useRef/UseRef";
import UseContextPage from "./pages/useContext/UseContext";
import UseReducerPage from "./pages/useReducer/UseReducer";
import UseCallbackPage from "./pages/useCallback/UseCallback";
import CustomHooksPage from "./pages/customHooks/CustomHooks";
import UseLayoutEffectPage from "./pages/useLayoutEffect/UseLayoutEffect";
import UseTemplatePage from "./pages/useTemplate/UseTemplate.js";
import UseTransitionPage from "./pages/useTransition/UseTransition.js";
import UseDeferredValuePage from "./pages/useDeferredValue/UseDeferredValue.js";

function App() {
  return (
    <Layout>
        <Switch>
            <Route exact path={["/", "/react-hooks"]}>
                <UseDeferredValuePage />
            </Route>
            <Route path="/usestate">
                <UseStatePage />
            </Route>
            <Route path="/useeffect">
                <UseEffectPage />
            </Route>
            <Route path="/usememo">
                <UseMemoPage />
            </Route>
            <Route path="/useref">
                <UseRefPage />
            </Route>
            <Route path="/usecontext">
                <UseContextPage />
            </Route>
            <Route path="/usereducer">
                <UseReducerPage />
            </Route>
            <Route path="/usecallback">
                <UseCallbackPage />
            </Route>
            <Route path="/customhooks">
                <CustomHooksPage />
            </Route>
            <Route path="/uselayouteffect">
                <UseLayoutEffectPage />
            </Route>
            <Route path="/usetransition">
                <UseTransitionPage />
            </Route>
            <Route path="/usetemplate">
                <UseTemplatePage />
            </Route>
            <Route path="/usedeferredvalue">
                <UseDeferredValuePage />
            </Route>
        </Switch>
    </Layout>    
  );
}

export default App;
