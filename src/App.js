// import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/home/Home";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./Components/noMatch/NoMatch";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/about/:id" component={Details} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
