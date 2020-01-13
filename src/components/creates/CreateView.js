import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Config from "../../Config";
import CreateCompetition from "./CreateCompetition";
import CreateRule from "./CreateRule";
import CreateStory from "./CreateStory";

export default function CreateView(props) {
  return (
    <Router>
      <Menu activeViewName={props.location.pathname} />

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
  );
}

/**
 * @todo fix button not changing color when clicked (use onClick event)
 * @param {string} activeViewName
 */
function Menu({ activeViewName }) {
  const active = "btn btn-lg btn-block btn-outline-primary";
  const inactive = "btn btn-lg btn-block btn-primary";
  const macro = propName =>
    `/create/${propName}` === activeViewName ? active : inactive;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="navbar-collapse justify-content-md-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={Config.getUrl("/create/story")}>
              <button type="button" className={macro("story")}>
                Story
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={Config.getUrl("/create/competition")}
            >
              <button type="button" className={macro("competition")}>
                Competition
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={Config.getUrl("/create/rule")}>
              <button type="button" className={macro("rule")}>
                Rule
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
