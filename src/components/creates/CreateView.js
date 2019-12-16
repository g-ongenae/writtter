import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Config from "../../Config";
import CreateCompetition from "./CreateCompetition";
import CreateRule from "./CreateRule";
import CreateStory from "./CreateStory";

export default function CreateView() {
  return (
    <div>
      <Router>
        <Link to={Config.getUrl("/create/story")}> Story </Link>
        <Link to={Config.getUrl("/create/competition")}> Competition </Link>
        <Link to={Config.getUrl("/create/rule")}> Rule </Link>

        <Switch>
          <Route path={Config.getUrl("/create/story")}>
            <CreateStory />
          </Route>
          <Route path={Config.getUrl("/create/competition")}>
            <CreateCompetition />
          </Route>
          <Route path={Config.getUrl("/create/rule")}>
            <CreateRule />
          </Route>
          <Route path={Config.getUrl("/create")}>
            <CreateStory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
