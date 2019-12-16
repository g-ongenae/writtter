import React, { Component } from "react";

const API_BASE_URL = "https://writtter.herokuapp.com";

export default class StoryReader extends Component {
  constructor(props) {
    super();
    this.state = {
      story: {},
      isLoading: false,
      error: null,
      storyId: props.storyId
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(`${API_BASE_URL}/stories/${this.storyId}`);
      if (!response.ok) {
        throw new Error("Something went wrong ...");
      }
      const data = await response.json();
      this.setState({ story: data.story, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { story, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading || !story) {
      return <div> Loading story </div>;
    }

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            {story.name} — by {story.ownerId} — {story.lastEditedAt}
          </div>
          <div class="panel-body">{story.content}</div>
        </div>
      </div>
    );
  }
}
