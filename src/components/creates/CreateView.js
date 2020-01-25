import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Config from "../../Config";
import Context from "../../Context";

import CreateCompetition from "./CreateCompetition";
import CreateRule from "./CreateRule";
import CreateStory from "./CreateStory";

export default function CreateView(props) {
  if (!Context.has("auth")) {
    return (
      <section className="App-section">
        <h1>Take part in a fantastic world of stories!</h1>
        <p className="text-center">
          You need to be authenticated to create a story.
          <br />
          <Link to={Config.getUrl("/register")}>Create a new account</Link>
          <br />
          <Link to={Config.getUrl("/login")}>Or connect to your account</Link>
        </p>
      </section>
    );
  }

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
            <span className="nav-link">
              <Link
                to={Config.getUrl("/create/story")}
                className={macro("story")}
              >
                Story
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link
                to={Config.getUrl("/create/competition")}
                className={macro("competition")}
              >
                Competition
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link
                to={Config.getUrl("/create/rule")}
                className={macro("rule")}
              >
                Rule
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
