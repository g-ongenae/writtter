import React, { Component } from "react";

import TagChoices from "./TagChoices";
import RuleChoices from "./RuleChoices";

export default class CreateStory extends Component {
  render() {
    return (
      <div className="container">
        <h1>Create a new story</h1>

        <form>
          <fieldset className="form-group">
            <label for="title">Title:</label>
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
            <input className="form-check-input" type="checkbox" name="isPublic" />
            <label className="form-check-label">Public Mode</label>
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-check-input"
              type="checkbox"
              name="commentsEnabled"
              defaultChecked
            />
            <label className="form-check-label">Comments enabled</label>
          </fieldset>
          <fieldset className="form-group">
            <label>Rules:</label>
            <RuleChoices userId={this.props.userId} />
          </fieldset>
          <fieldset className="form-group">
            <label>Tags:</label>
            <TagChoices userId={this.props.userId} />
          </fieldset>
          <fieldset className="form-group text-center">
            <input type="submit" value="Create story" className="btn btn-primary" />
          </fieldset>
        </form>
      </div>
    );
  }
}
