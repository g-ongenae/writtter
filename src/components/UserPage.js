import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Config from "../Config";
import Stories from "./lists/Stories";
import Competitions from "./lists/Competitions.js";
import Comments from "./lists/Comments";

export default class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      userId: 0
    };
  }

  render() {
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
