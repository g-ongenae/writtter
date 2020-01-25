import React, { Component } from "react";

import Config from "../../Config";
import Context from "../../Context";

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

    try {
      const response = await fetch(Config.getApi("/tags"), request);

      if (!response.ok) {
        throw new Error("Could not fetch tags");
      }

      const data = await response.json();
      this.setState({ tags: data, isLoading: false });
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
