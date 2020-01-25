import React, { Component } from "react";

import Config from "../Config";

export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: null,
      auth: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, event) {
    const obj = {};
    obj[field] = event.target.value;
    this.setState(obj);
  }

  async handleSubmit(event) {
    // Prevent from refreshing
    event.preventDefault();

    // Send data to the server
    const response = await fetch(Config.getApi("/users/login"), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        username: this.state.username,
        password: this.state.password
      }
    });

    const data = await response.json();
    const auth = {
      Authorization: response.headers.get("Authorization"),
      "X-Access-Token": response.headers.get("X-Access-Token")
    };
    this.setState({ auth, data });
    console.log("Connect Request", JSON.stringify(this.state));

    // Redirect
    window.location.href = Config.getUrl(`/?a=${auth.Authorization}`);
  }

  render() {
    return (
      <div className="container">
        <h1> Connect </h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="form-group">
            <label>Username:</label>
            <input
              id="username"
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleChange.bind(this, "username")}
              required
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange.bind(this, "password")}
              required
            />
          </fieldset>
          <fieldset className="form-group text-center">
            <input type="submit" value="Log in" className="btn btn-primary" />
          </fieldset>
        </form>
      </div>
    );
  }
}
