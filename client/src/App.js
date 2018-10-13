import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Register from "./pages/register";
import Login from "./pages/login";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/home";
import Dashboard from "./views/Dashboard/Dashboard";
import UserProfile from "./pages/userProfile";

// import "./App.css";

const App = () => (
  <Wrapper className="Site">
    <HashRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/userProfile" component={UserProfile} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="*" component={NoMatch} />
      </Switch>
    </HashRouter>
  </Wrapper>
);

export default App;
