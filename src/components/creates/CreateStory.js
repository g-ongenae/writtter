import React, { Component } from "react";

import Config from "../../Config";
import TagChoices from "./TagChoices";
import RuleChoices from "./RuleChoices";

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isPublic: false,
      isCommentsDisabled: false,
      description: "",
      ownerId: 1 // TODO fix me
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
    const response = await fetch(Config.getApi("/stories"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ownerId: this.state.ownerId,
        name: this.state.name,
        description: this.state.description,
        isPublic: this.state.isPublic,
        isCommentsDisabled: !this.state.isCommentsDisabled
      })
    });

    console.log("response", response);

    // Redirect
    window.location.href = Config.getUrl("/");
  }

  render() {
    return (
      <div className="container">
        <h1>Create a new story</h1>

        <form>
          <fieldset className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter title"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Write a description for your story"
              rows="3"
              value={this.state.description}
              onChange={this.handleChange.bind(this, "description")}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-check-input"
              type="checkbox"
              name="isPublic"
              value={this.state.isPublic}
              onChange={this.handleChange.bind(this, "isPublic")}
            />
            <label className="form-check-label">Public Mode</label>
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-check-input"
              type="checkbox"
              name="commentsEnabled"
              defaultChecked
              value={this.state.isCommentsDisabled}
              onChange={this.handleChange.bind(this, "isCommentsDisabled")}
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
            <input
              type="submit"
              value="Create story"
              className="btn btn-primary"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
