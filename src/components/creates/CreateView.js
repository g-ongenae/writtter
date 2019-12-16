import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import CreateCompetition from "./CreateCompetition";
import CreateRule from "./CreateRule";
import CreateStory from "./CreateStory";

export default function CreateView() {
  return (
    <div>
      <Router>
        <Link to="/create/story"> Story </Link>
        <Link to="/create/competition"> Competition </Link>
        <Link to="/create/rule"> Rule </Link>

        <Switch>
          <Route path="/create/story">
            <CreateStory />
          </Route>
          <Route path="/create/competition">
            <CreateCompetition />
          </Route>
          <Route path="/create/rule">
            <CreateRule />
          </Route>
          <Route path="/create">
            <CreateStory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
