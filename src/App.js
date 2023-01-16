import { Route, Switch} from "react-router-dom";

import Layout from "./components/layout/Layout.js";
import UseStatePage from "./pages/UseState";
import UseEffectPage from "./pages/UseEffect";
import UseMemoPage from "./pages/UseMemo";

function App() {
  return (
    <Layout>
        <Switch>
            <Route path="/" exact="true">
                <UseStatePage />
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
        </Switch>
    </Layout>    
  );
}

export default App;
