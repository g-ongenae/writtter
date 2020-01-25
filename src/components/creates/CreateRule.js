import React, { Component } from "react";

import TagChoices from "./TagChoices";

export default class CreateRule extends Component {
  render() {
    return (
      <div className="App-sub-section">
      <div className="container">
        <h1>Create a new rule</h1>

        <form>
          <fieldset className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter title"
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Write a description for your story"
              rows="3"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-check-input"
              type="checkbox"
              name="isPublic"
            />
            <label className="form-check-label">Public Mode</label>
          </fieldset>
          <fieldset className="form-group">
            <label>Tags:</label>
            <TagChoices userId={this.props.userId} />
          </fieldset>
          <fieldset className="form-group text-center">
            <input
              type="submit"
              value="Create rule"
              className="btn btn-primary"
            />
          </fieldset>
        </form>
      </div>
      </div>
    );
  }
}
