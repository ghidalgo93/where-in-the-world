import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Docs from "./components/Docs";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/docs" component={Docs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
