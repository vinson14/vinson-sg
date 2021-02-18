import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import "./App.css";
import About from "./pages/About/About";

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
