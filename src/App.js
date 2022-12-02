import { Route, Switch} from "react-router-dom";

import UseStatePage from "./pages/UseState";
import UseEffectPage from "./pages/UseEffect";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
        <MainNavigation />
        <Switch>
            <Route path="/usestate">
                <UseStatePage />
            </Route>
            <Route path="/useeffect">
                <UseEffectPage />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
