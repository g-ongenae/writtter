import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Config from "../Config";

export default class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
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
          <Link to={Config.getUrl("/user/:userId/stories")}> Stories </Link>
          <Link to={Config.getUrl("/user/:userId/competitions")}>
            {" "}
            Competitions{" "}
          </Link>
          <Link to={Config.getUrl("/user/:userId/likes")}> Likes </Link>
          <Link to={Config.getUrl("/user/:userId/comments")}> Comments </Link>

          <Switch>
            <Route path={Config.getUrl("/user/:userId/stories")}>
              {" "}
              <Stories liked={false} />{" "}
            </Route>
            <Route path={Config.getUrl("/user/:userId/competitions")}>
              {" "}
              <Competitions />{" "}
            </Route>
            <Route path={Config.getUrl("/user/:userId/likes")}>
              {" "}
              <Stories liked={true} />{" "}
            </Route>
            <Route path={Config.getUrl("/user/:userId/comments")}>
              {" "}
              <Comments />{" "}
            </Route>
            <Route path={Config.getUrl("/user/:userId")}>
              {" "}
              <Stories liked={false} />{" "}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function Stories(params) {}

function Competitions(params) {}

function Comments(params) {}
