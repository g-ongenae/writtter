import React, { Component } from "react";

import TagChoices from "./TagChoices";
import RuleChoices from "./RuleChoices";

export default class CreateStory extends Component {
  render() {
    return (
      <div class="container">
        <h1>Create a new story</h1>

        <form>
          <fieldset class="form-group">
            <label for="title">Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              class="form-control"
              placeholder="Enter title"
            />
          </fieldset>
          <fieldset class="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              class="form-control"
              placeholder="Write a description for your story"
              rows="3"
            />
          </fieldset>
          <fieldset class="form-group">
            <input class="form-check-input" type="checkbox" name="isPublic" />
            <label class="form-check-label">Public Mode</label>
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-check-input"
              type="checkbox"
              name="commentsEnabled"
              defaultChecked
            />
            <label class="form-check-label">Comments enabled</label>
          </fieldset>
          <fieldset class="form-group">
            <label>Rules:</label>
            <RuleChoices userId={this.props.userId} />
          </fieldset>
          <fieldset class="form-group">
            <label>Tags:</label>
            <TagChoices userId={this.props.userId} />
          </fieldset>
          <fieldset class="form-group text-center">
            <input type="submit" value="Create story" class="btn btn-primary" />
          </fieldset>
        </form>
      </div>
    );
  }
}
