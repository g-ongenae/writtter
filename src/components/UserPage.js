import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Config from "../Config";
import Context from "../Context";

import Stories from "./lists/Stories";
import Competitions from "./lists/Competitions.js";
import Comments from "./lists/Comments";

export default class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      userId: props.userId,
      userData: props.userData || null,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (Context.has("auth")) {
      headers = { ...headers, ...Context.get("auth") };
    }

    const request = {
      method: "GET",
      headers
    };

    try {
      let response;
      if (!this.state.userId) {
        response = await fetch(Config.getApi("/users/auth"), request);
      } else {
        response = await fetch(
          Config.getApi(`/users/${this.state.userId}`),
          request
        );
      }

      if (!response.ok) {
        console.log("Request failed", response);
        throw new Error(response.statusText);
      }

      const userData = await response.json();
      this.setState({ isLoading: false, userData, userId: userData.id });
    } catch (error) {
      console.error("An error occurred: ", error);
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { error, isLoading, userData } = this.state;
    if (error || (!isLoading && !userData)) {
      return (
        <section className="App-section">
          <h1>An error occurred: {error && error.message}</h1>
        </section>
      );
    }

    if (isLoading) {
      return (
        <section className="App-section">
          <h1>Loading...</h1>
        </section>
      );
    }

    // TODO add style and details about the user
    return (
      <div>
        <Router>
          <div>
            <h1>
              <small className="text-muted">Profile of</small>{" "}
              {this.state.userData.username}
            </h1>
          </div>

          <UserMenu
            userId={this.state.userId}
            activeViewName={window.location.pathname}
          />

          <Switch>
            <Route path={Config.getUrl("/user/:userId/stories")}>
              <Stories liked={false} userId={this.state.userId} />
            </Route>
            <Route path={Config.getUrl("/user/:userId/competitions")}>
              <Competitions userId={this.state.userId} />
            </Route>
            <Route path={Config.getUrl("/user/:userId/likes")}>
              <Stories liked={true} userId={this.state.userId} />
            </Route>
            <Route path={Config.getUrl("/user/:userId/comments")}>
              <Comments userId={this.state.userId} />
            </Route>
            <Route path={Config.getUrl("/user/:userId/rules")}>
              <Comments userId={this.state.userId} />
            </Route>
            <Route path={Config.getUrl("/user/:userId")}>
              <Stories liked={false} userId={this.state.userId} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function UserMenu({ userId, activeViewName }) {
  const active = "btn btn-lg btn-block btn-outline-primary";
  const inactive = "btn btn-lg btn-block btn-primary";
  const macro = propName =>
    `user/${userId}/${propName}` === activeViewName ? active : inactive;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="navbar-collapse justify-content-md-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <span className="nav-link">
              <Link
                to={Config.getUrl(`/user/${userId}/stories`)}
                className={macro("story")}
              >
                Stories
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link
                to={Config.getUrl(`/user/${userId}/competitions`)}
                className={macro("competition")}
              >
                Competitions
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link
                to={Config.getUrl(`/user/${userId}/rules`)}
                className={macro("rules")}
              >
                Rules
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link
                to={Config.getUrl(`/user/${userId}/comments`)}
                className={macro("comments")}
              >
                Comments
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link
                to={Config.getUrl(`/user/${userId}/likes`)}
                className={macro("likes")}
              >
                Likes
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
