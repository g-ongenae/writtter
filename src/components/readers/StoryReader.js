import React, { Component } from "react";
import { Link } from "react-router-dom";

import Config from "../../Config";
import Context from "../../Context";
import QSParser from "../../utils/QueryStringParser";

export default class StoryReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      isLoading: false,
      error: null,
      storyId: props.storyId
    };

    QSParser.setAuth();
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
      return (
        <section className="App-section">
          <h1>An error occurred: {error && error.message}</h1>
        </section>
      );
    }

    if (isLoading || !story) {
      return (
        <section className="App-section">
          <h1>Loading story...</h1>
        </section>
      );
    }

    const editLink = (
      <Link
        to={Config.getUrl(`/story/${story.id}/edit`)}
        className="btn btn-lg btn-block btn-primary"
      >
        Edit the story
      </Link>
    );

    const connectLink = (
      <Link
        to={Config.getUrl(`/login`)}
        className="btn btn-lg btn-block btn-primary"
      >
        Connect to edit this story
      </Link>
    );

    const date = new Date(story.lastEditedAt || story.createdAt);
    return (
      <div className="App-sub-section">
        <div className="container">
          <div className="card panel-default">
            <div className="card-header text-center">
              <b>{story.name}</b> — by{" "}
              <Link to={Config.getUrl(`/user/${story.ownerId}`)}>
                {story.ownerId}
              </Link>{" "}
              — {date.toDateString()}
            </div>
            <div className="card-body">
              {story.content || "No content for now"}
            </div>
            <div className="card-footer">
              {Context.has("auth") ? editLink : connectLink}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
