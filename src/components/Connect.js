import React, { Component } from "react";

export default class Connect extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <h1> Connect </h1>
        <form>
          <fieldset class="form-group">
            <label>Username:</label>
            <input
              id="username"
              type="text"
              name="title"
              class="form-control"
              placeholder="Enter your username"
              required
            />
          </fieldset>
          <fieldset class="form-group">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </fieldset>
          <fieldset class="form-group text-center">
            <input type="submit" value="Log in" class="btn btn-primary" />
          </fieldset>
        </form>
      </div>
    );
  }
}
