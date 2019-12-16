import React, { Component } from "react";

export default class Connect extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1> Connect </h1>
        <form>
          <fieldset className="form-group">
            <label>Username:</label>
            <input
              id="username"
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter your username"
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
