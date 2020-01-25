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
    );
  }
}
