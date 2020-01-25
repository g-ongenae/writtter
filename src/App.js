import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Config from "./Config";
import Context from "./Context";
import Connect from "./components/Connect";
import CreateView from "./components/creates/CreateView";
import SearchPage from "./components/SearchPage";
import Menu from "./components/Menu";
import UserPage from "./components/UserPage";
import CreateUser from "./components/creates/CreateUser";
import StoryReader from "./components/readers/StoryReader";
import StoryEditor from "./components/editor/StoryEditor";
import HomePage from "./components/HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
    };
    if (window.location.search) {
      const query = new URLSearchParams(window.location.search);
      const auth = {
        authorization: query.get("a"),
        "x-access-token": query.get("a"),
      };
      Context.set("auth", auth);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Menu />

          <Switch>
            <Route path={Config.getUrl("/about")} component={AboutView} />
            <Route path={Config.getUrl("/create")} component={CreateView} />
            <Route path={Config.getUrl("/search")} component={SearchPage} />
            <Route path={Config.getUrl("/profile")}>
              <UserPage userId={this.state.userId} />
            </Route>
            <Route path={Config.getUrl("/user/:userId")} component={({ match }) => (<UserPage userId={match.params.userId}/>)} />
            <Route path={Config.getUrl("/login")} component={Connect} />
            <Route path={Config.getUrl("/register")} component={CreateUser} />
            <Route path={Config.getUrl("/story/:id/edit")} component={({ match }) => (<StoryEditor storyId={match.params.id} />)} />
            <Route path={Config.getUrl("/story/:id")} component={({ match }) => (<StoryReader storyId={match.params.id} />)} />
            <Route exact path={Config.getUrl("/")} component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function AboutView(params) {
  return (
    <section className="App-section">
      <h1>Writtter</h1>
      <h4>The place to play with words and stories, together.</h4>
      <p>
        Created by <a href="https://g-ongenae.github.io/">Guillaume Ongenae</a>
      </p>
    </section>
  );
}