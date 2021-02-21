import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import "./App.css";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/experience" exact>
                        <Experience />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
