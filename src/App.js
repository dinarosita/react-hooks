import { Route, Switch } from "react-router-dom";

import Layout from "./layout/Layout.js";
import UseStatePage from "./pages/useState/UseStatePage";
import UseMemoPage from "./pages/useMemo/UseMemoPage";
import UseRefPage from "./pages/useRef/UseRefPage";
import UseContextPage from "./pages/useContext/UseContextPage";
import UseReducerPage from "./pages/useReducer/UseReducerPage";
import UseCallBackPage from "./pages/useCallback/UseCallBackPage";
import CustomHooksPage from "./pages/customHooks/CustomHooks";
import UseLayoutEffectPage from "./pages/useLayoutEffect/UseLayoutEffectPage";
import UseTransitionPage from "./pages/useTransition/UseTransitionPage";
import UseDeferredValuePage from "./pages/useDeferredValue/UseDeferredValuePage";
import Home from "./pages/Home.js";
import UseEffectPage from "./pages/useEffect/UseEffectPage.js";
import CustomHookPage from "./pages/customHooks/CustomHookPage.js";

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
          <UseCallBackPage />
        </Route>
        <Route path="/react-hooks/customhooks">
          <CustomHooksPage />
        </Route>
        <Route path="/react-hooks/uselayouteffect">
          <UseLayoutEffectPage />
        </Route>
        <Route path="/react-hooks/usetransition">
          <UseTransitionPage />
        </Route>
        <Route path="/react-hooks/usedeferredvalue">
          <UseDeferredValuePage />
        </Route>
        <Route path="/react-hooks/customhook">
          <CustomHookPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
