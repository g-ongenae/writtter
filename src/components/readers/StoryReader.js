import React, { Component } from "react";

import Config from "../../Config";

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
      const response = await fetch(Config.getApi(`/stories/${this.storyId}`));
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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            {story.name} — by {story.ownerId} — {story.lastEditedAt}
          </div>
          <div className="panel-body">{story.content}</div>
        </div>
      </div>
    );
  }
}
