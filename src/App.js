import { Route, Switch} from "react-router-dom";

import UseStatePage from "./pages/UseState";
import UseEffectPage from "./pages/UseEffect";
import UseMemoPage from "./pages/UseMemo";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
        <MainNavigation />
        <Switch>
            <Route path="/react-hooks" exact="true">
                <UseStatePage />
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
        </Switch>
    </div>
  );
}

export default App;
