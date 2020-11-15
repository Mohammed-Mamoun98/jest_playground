import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextPlay, Home, MaterialPG } from "../pages/bootstrap";
import Login from "./../pages/login/index";

export default function _Router() {
  return (
    <Router>
      <Switch>
        <div className="todo-container">
          <Route exact path="/mat" component={MaterialPG} />
          <Route exact path="/a" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={ContextPlay} />
        </div>
      </Switch>
    </Router>
  );
}
