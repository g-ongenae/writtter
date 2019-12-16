import React, { Component } from "react";

const API_BASE_URL = "https://writtter.herokuapp.com";

export default class TagChoices extends Component {
  constructor() {
    super();

    this.state = {
      tags: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(`${API_BASE_URL}/tags`);

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
