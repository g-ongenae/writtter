import React, { Component } from "react";
import { Link } from "react-router-dom";

import Config from "../../Config";
import Context from "../../Context";

export default class StoryReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      isLoading: false,
      error: null,
      storyId: props.storyId
    };
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
      this.setState({ story, isLoading: false });
      return;
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
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
    const response = await fetch(Config.getApi("/stories"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(Context.get("auth") || {})
      },
      body: JSON.stringify({
        ownerId: this.state.ownerId,
        name: this.state.name,
        description: this.state.description,
        isPublic: this.state.isPublic,
        isCommentsDisabled: !this.state.isCommentsDisabled
      })
    });

    if (!response.ok) {
      console.error("Failed to create story", response);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    // Redirect
    window.location.href = Config.getUrl(
      `/story/${data.id}/?a=${Context.get("auth").authorization}`
    );
  }

  render() {
    const { story, isLoading, error } = this.state;

    if (error) {
      return <p>An error occurred, sorry: {error.message}</p>;
    }

    if (isLoading || !story) {
      return <div> Loading story </div>;
    }

    const date = new Date(story.lastEditedAt || story.createdAt);
    return (
      <div>
      <div className="container">
      <h1>Create a new story</h1>

      <form onSubmit={this.handleSubmit}>
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
            onChange={this.handleCheck.bind(this, "isPublic")}
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
            onChange={this.handleCheck.bind(this, "isCommentsDisabled")}
          />
          <label className="form-check-label">Comments enabled</label>
        </fieldset>
        {/* TODO fix me
        <fieldset className="form-group">
          <label>Rules:</label>
          <RuleChoices userId={this.props.userId} />
        </fieldset> */}
        {/* <fieldset className="form-group">
          <label>Tags:</label>
          <TagChoices userId={this.props.userId} />
        </fieldset> */}
        <fieldset className="form-group text-center">
          <input
            type="submit"
            value="Create story"
            className="btn btn-primary"
          />
        </fieldset>
      </form>
    </div>
    
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="card panel-default">
          <div className="card-header text-center">
            <b>{story.name}</b> — by{" "}
            <Link to={`/user/${story.ownerId}=`}>{story.ownerId}</Link> —{" "}
            {date.toDateString()}
          </div>
          <div className="card-body">
            {story.content || "No content for now"}
          </div>
          <div className="card-footer">
            <input
              type="submit"
              className="btn btn-lg btn-block btn-primary"
              placeholder="Edit the story"
            />
          </div>
        </div>
      </form>

      <div className="container">
        <div className="card panel-default">
          <div className="card-header text-center">
            <b>{story.name}</b> — by{" "}
            <Link to={`/user/${story.ownerId}=`}>{story.ownerId}</Link> —{" "}
            {date.toDateString()}
          </div>
          <div className="card-body">
            {story.content || "No content for now"}
          </div>
          <div className="card-footer">
            <Link to={`/story/${story.id}/edit`}>
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Edit the story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
