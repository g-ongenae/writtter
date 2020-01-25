import React, { Component } from "react";
import { Link } from "react-router-dom";

import Config from "../../Config";
import Context from "../../Context";

export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: null,
      isLoading: false,
      userId: props.userId || null,
      liked: props.liked || false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      if (Context.has("auth")) {
        headers = { ...headers, ...Context.get("auth") };
      }

      const request = {
        method: "GET",
        headers
      };

      let response;

      if (this.state.userId && !this.state.liked) {
        response = await fetch(
          Config.getApi(`/stories/users/${this.state.userId}`),
          request
        );
      } else if (this.state.userId && this.state.liked) {
        response = await fetch(
          Config.getApi(`/stories/likes/${this.state.userId}`),
          request
        );
      } else {
        response = await fetch(Config.getApi("/stories/all"), request);
      }

      if (!response.ok) {
        console.log("Error fetching stories", response);
        throw new Error("Could not fetch stories");
      }

      const stories = await response.json();
      this.setState({ stories, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { stories, isLoading, error } = this.state;

    if (error) {
      return (
        <div className="App-section">
          An error occurred, sorry: {error.message}
        </div>
      );
    }

    if (isLoading || !stories) {
      return <div className="App-section">Loading story...</div>;
    }

    if (Array.isArray(stories) && stories.length === 0) {
      return <div className="App-section">No stories</div>;
    }

    const storyList = stories.map(story => (
      <li key={story.id} className="list-group-item text-secondary">
        <b>
          <Link to={Config.getUrl(`/story/${story.id}`)}>{story.name}</Link>
        </b>{" "}
        — by{" "}
        <Link to={Config.getUrl(`/user/${story.ownerId}`)}>
          {story.ownerId}
        </Link>{" "}
        — {new Date(story.lastEditedAt || story.createdAt).toDateString()}
      </li>
    ));

    return (
      <div className="App-section">
        <ul name="rules" className="list-group">
          {storyList}
        </ul>
      </div>
    );
  }
}
