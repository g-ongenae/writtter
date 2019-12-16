import React, { Component } from "react";

const API_BASE_URL = "https://writtter.herokuapp.com";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
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

    console.log("Event", event);
    // Send data to the server
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    });

    console.log("response", response);

    // Redirect
    // window.location.href = "/";
  }

  render() {
    return (
      <div className="container">
        <h1>Create a new account</h1>

        <form onSubmit={this.handleSubmit}>
          <fieldset className="form-group">
            <label>Username:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                value={this.state.username}
                onChange={this.handleChange.bind(this, "username")}
                id="username"
                type="text"
                name="title"
                className="form-control"
                placeholder="Enter your username"
                required
              />
            </div>
          </fieldset>
          <fieldset className="form-group">
            <label>Email:</label>
            <input
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email address"
              required
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input
              value={this.state.password}
              onChange={this.handleChange.bind(this, "password")}
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
            <small id="passwordHelpInline" className="text-muted">
              Must be 8-20 characters long.
            </small>
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-check-input"
              type="checkbox"
              name="rules"
              required
            />
            <label className="form-check-label">
              Accept rules and email subscription
            </label>
            <small id="passwordHelpInline" className="text-muted">
              No commercial offer will be send to you, just regular usage.
            </small>
          </fieldset>
          <fieldset className="form-group text-center">
            <input
              type="submit"
              value="Create account"
              className="btn btn-primary"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
