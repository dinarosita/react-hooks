import { Route, Switch} from "react-router-dom";

import Layout from "./layout/Layout.js";
import UseStatePage from "./pages/useState/UseStatePage";
import UseMemoPage from "./pages/useMemo/UseMemo";
import UseRefPage from "./pages/useRef/UseRef";
import UseContextPage from "./pages/useContext/UseContext";
import UseReducerPage from "./pages/useReducer/UseReducer";
import UseCallbackPage from "./pages/useCallback/UseCallback";
import CustomHooksPage from "./pages/customHooks/CustomHooks";
import UseLayoutEffectPage from "./pages/useLayoutEffect/UseLayoutEffectPage";
import UseTransitionPage from "./pages/useTransition/UseTransition.js";
import UseDeferredValuePage from "./pages/useDeferredValue/UseDeferredValue.js";
import Home from "./pages/Home.js";
import UseEffectPage from "./pages/useEffect/UseEffectPage.js";

function App() {
  return (
    <Layout>
        <Switch>
            <Route exact path={["/", "/react-hooks"]}>
                <Home />
            </Route>
            <Route path="/react-hooks/usestate">
                <UseStatePage />
            </Route>
            <Route path="/react-hooks/useeffect">
                <UseEffectPage />
            </Route>
            <Route path="/react-hooks/usememo">
                <UseMemoPage />
            </Route>
            <Route path="/react-hooks/useref">
                <UseRefPage />
            </Route>
            <Route path="/react-hooks/usecontext">
                <UseContextPage />
            </Route>
            <Route path="/react-hooks/usereducer">
                <UseReducerPage />
            </Route>
            <Route path="/react-hooks/usecallback">
                <UseCallbackPage />
            </Route>
            <Route path="/react-hooks/customhooks">
                <CustomHooksPage />
            </Route>
            <Route path="/react-hooks/uselayouteffectpage">
                <UseLayoutEffectPage />
            </Route>
            <Route path="/react-hooks/usetransition">
                <UseTransitionPage />
            </Route>
            <Route path="/react-hooks/usedeferredvalue">
                <UseDeferredValuePage />
            </Route>
        </Switch>
    </Layout>    
  );
}

export default App;
