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
      error: {}
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

    try {
      let response;
      if (!this.state.userId) {
        console.log("Hello from the client", Context, headers);
        response = await fetch(
          Config.getApi("/users/auth", {
            method: "GET",
            headers
          })
        );
      } else {
        response = await fetch(
          Config.getApi(`/users/${this.state.userId}`, {
            method: "GET",
            headers
          })
        );
      }

      if (!response.ok) {
        console.error("An error occurred: ", response);
        throw new Error(response.statusText);
      }

      const userData = await response.json();
      this.setState({ loading: false, userData, userId: userData.id });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { error, isLoading, userId } = this.state;
    if (error || (!isLoading && !userId)) {
      return (
        <section className="App-section">
          {" "}
          <h1>An error occurred: {error && error.message}</h1>{" "}
        </section>
      );
    }

    if (isLoading) {
      return (
        <section className="App-section">
          {" "}
          <h1>Loading...</h1>{" "}
        </section>
      );
    }

    return (
      <div>
        <Router>
          <div>
            {/* Username: {username = "Guillaume"} */}
            {/* <img> {userimage = "hello"} </img> */}
          </div>
          <Link to={Config.getUrl(`/user/${this.state.userId}/stories`)}>
            Stories
          </Link>
          <Link to={Config.getUrl(`/user/${this.state.userId}/competitions`)}>
            Competitions
          </Link>
          <Link to={Config.getUrl(`/user/${this.state.userId}/likes`)}>
            Likes
          </Link>
          <Link to={Config.getUrl(`/user/${this.state.userId}/comments`)}>
            Comments
          </Link>

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
            <Route path={Config.getUrl("/user/:userId")}>
              <Stories liked={false} userId={this.state.userId} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
