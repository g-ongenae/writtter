import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Config from "./Config";
import Connect from "./components/Connect";
import CreateView from "./components/creates/CreateView";
import SearchPage from "./components/SearchPage";
import Menu from "./components/Menu";
import UserPage from "./components/UserPage";
import CreateUser from "./components/creates/CreateUser";
import StoryReader from "./components/readers/StoryReader"

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("URL")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({});
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Menu></Menu>

          <Switch>
            <Route path={Config.getUrl('/create')}>
              <CreateView />
            </Route>
            <Route path={Config.getUrl('/search')}>
              <SearchPage />
            </Route>
            <Route path={Config.getUrl('/profile')}>
              <UserPage userId={this.state.userId} />
            </Route>

            <Route path={Config.getUrl('/user')}>
              <UserPage />
            </Route>
            <Route path={Config.getUrl('/login')}>
              <Connect />
            </Route>
            <Route path={Config.getUrl('/register')}>
              <CreateUser />
            </Route>
            <Route path="/stories/:id" component={({ match }) => (<StoryReader storyId={match.params.id} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}
