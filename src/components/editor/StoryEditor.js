import React, { Component } from "react";
import { Link } from "react-router-dom";
import Octicon, { ArrowLeft, Fold } from "@primer/octicons-react";

import Config from "../../Config";
import Context from "../../Context";

export default class StoryReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Format
      isLoading: false,
      formIsHidden: false,
      error: null,
      // data
      storyId: props.storyId,
      ownerId: null,
      name: null,
      isPublic: false,
      isCommentsDisabled: false,
      description: "",
      content: ""
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        Config.getApi(`/stories/${this.state.storyId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(Context.get("auth") || {})
          }
        })
      );
      if (!response.ok) {
        console.error("Failed to load story", response);
        throw new Error("Something went wrong...");
      }
      const story = await response.json();
      this.setState({ ...story, isLoading: false });
      return;
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  toggleForm() {
    this.setState({ formIsHidden: !this.state.formIsHidden });
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    });
  }

  handleCheck(field, event) {
    this.setState({
      [field]: event.target.checked
    });
  }

  async handleSubmit(event) {
    // Prevent from refreshing
    event.preventDefault();

    // Send data to the server
    const response = await fetch(
      Config.getApi(`/stories/${this.state.storyId}`),
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(Context.get("auth") || {})
        },
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description,
          isPublic: this.state.isPublic,
          isCommentsDisabled: !this.state.isCommentsDisabled,
          content: this.state.content
        })
      }
    );

    if (!response.ok) {
      console.error("Failed to update story", response);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    // Redirect
    window.location.href = Config.getUrl(
      `/story/${data.id}/?a=${(Context.get("auth") || {}).authorization}`
    );
  }

  render() {
    const { storyId, isLoading, name, error } = this.state;

    if (error) {
      return (
        <div className="App-section">
          <h1>An error occurred, sorry: {error.message}</h1>
        </div>
      );
    }

    if (isLoading || !storyId || !name) {
      return (
        <div className="App-section">
          <h1>Loading story</h1>
        </div>
      );
    }

    return (
      <div className="App-sub-section">
      <div className="container">
        <div>
          <h1>
            Edit{" "}
            <Link to={Config.getUrl(`/story/${storyId}`)}>
              <i>{this.state.name}</i>
            </Link>{" "}
            by{" "}
            <Link to={Config.getUrl(`/user/${this.state.ownerId}`)}>
              {this.state.ownerId}
            </Link>{" "}
          </h1>

          {!this.state.formIsHidden && <StoryEditorForm binder={this} />}
        </div>

        <div>
          <div className="card panel-default">
            <div className="card-header text-center">
              <button className="btn btn-primary" onClick={this.toggleForm}>
                <Octicon icon={Fold} /> Toggle story properties
              </button>{" "}
              <Link
                className="btn btn-primary"
                to={Config.getUrl(`/story/${storyId}`)}
              >
                <Octicon icon={ArrowLeft} /> Back
              </Link>
            </div>
            <div className="card-body">
              <textarea
                form="storyEditor"
                name="content"
                className="form-control"
                placeholder="Write your story here"
                rows="3"
                value={this.state.content}
                onChange={this.handleChange.bind(this, "content")}
              />
            </div>
            <div className="card-footer">
              <button
                form="storyEditor"
                type="button"
                className="btn btn-lg btn-block btn-primary"
                placeholder="Edit the story"
                onClick={this.handleSubmit}
              >
                Edit the story
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

function StoryEditorForm({ binder }) {
  return (
    <form id="storyEditor" onSubmit={binder.handleSubmit}>
      <fieldset className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          className="form-control"
          placeholder="Enter title"
          value={binder.state.name}
          onChange={binder.handleChange.bind(binder, "name")}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          className="form-control"
          placeholder="Write a description for your story"
          rows="3"
          value={binder.state.description}
          onChange={binder.handleChange.bind(binder, "description")}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-check-input"
          type="checkbox"
          name="isPublic"
          value={binder.state.isPublic}
          onChange={binder.handleCheck.bind(binder, "isPublic")}
        />
        <label className="form-check-label">Public Mode</label>
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-check-input"
          type="checkbox"
          name="commentsEnabled"
          value={binder.state.isCommentsDisabled}
          onChange={binder.handleCheck.bind(binder, "isCommentsDisabled")}
        />
        <label className="form-check-label">Comments enabled</label>
      </fieldset>
      {/* TODO fix me
        <fieldset className="form-group">
          <label>Rules:</label>
          <RuleChoices userId={binder.props.userId} />
        </fieldset>
        <fieldset className="form-group">
          <label>Tags:</label>
          <TagChoices userId={binder.props.userId} />
        </fieldset>
      */}
      <fieldset className="form-group text-center">
        <input type="submit" value="Edit story" className="btn btn-primary" />
      </fieldset>
    </form>
  );
}
