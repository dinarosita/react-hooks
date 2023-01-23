import { Route, Switch} from "react-router-dom";

import Layout from "./layout/Layout.js";
import UseStatePage from "./pages/UseState";
import UseEffectPage from "./pages/UseEffect";
import UseMemoPage from "./pages/UseMemo";
import UseRefPage from "./pages/UseRef";
import UseContextPage from "./pages/UseContext";

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
            <Route path="/useref">
                <UseRefPage />
            </Route>
            <Route path="/usecontext">
                <UseContextPage />
            </Route>
        </Switch>
    </Layout>    
  );
}

export default App;
