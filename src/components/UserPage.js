import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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
          <Link to="/user/:userId/stories"> Stories </Link>
          <Link to="/user/:userId/competitions"> Competitions </Link>
          <Link to="/user/:userId/likes"> Likes </Link>
          <Link to="/user/:userId/comments"> Comments </Link>

          <Switch>
            <Route path="/user/:userId/stories">
              {" "}
              <Stories liked={false} />{" "}
            </Route>
            <Route path="/user/:userId/competitions">
              {" "}
              <Competitions />{" "}
            </Route>
            <Route path="/user/:userId/likes">
              {" "}
              <Stories liked={true} />{" "}
            </Route>
            <Route path="/user/:userId/comments">
              {" "}
              <Comments />{" "}
            </Route>
            <Route path="/user/:userId">
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
