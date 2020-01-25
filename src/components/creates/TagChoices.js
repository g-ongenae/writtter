import React, { Component } from "react";

import Config from "../../Config";

export default class TagChoices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(Config.getApi("/tags"));

      if (!response.ok) {
        throw new Error("Could not fetch tags");
      }

      const data = await response.json();
      this.setState({ tags: data.tags, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const tagsChoices = this.state.tags.map(tag => (
      <option value={tag.id}>{tag.name}</option>
    ));

    return (
      <select name="tags" className="form-control" multiple>
        {tagsChoices}
      </select>
    );
  }
}
