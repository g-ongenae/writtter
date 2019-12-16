import React, { Component } from "react";

export default class CreateUser extends Component {
  render() {
    return (
      <div class="container">
        <h1>Create a new account</h1>

        <form>
          <fieldset class="form-group">
            <label>Username:</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input
                id="username"
                type="text"
                name="title"
                class="form-control"
                placeholder="Enter your username"
                required
              />
            </div>
          </fieldset>
          <fieldset class="form-group">
            <label>Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter your email address"
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
            <small id="passwordHelpInline" class="text-muted">
              Must be 8-20 characters long.
            </small>
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-check-input"
              type="checkbox"
              name="rules"
              required
            />
            <label class="form-check-label">
              Accept rules and email subscription
            </label>
            <small id="passwordHelpInline" class="text-muted">
              No commercial offer will be send to you, just regular usage.
            </small>
          </fieldset>
          <fieldset class="form-group text-center">
            <input
              type="submit"
              value="Create account"
              class="btn btn-primary"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
