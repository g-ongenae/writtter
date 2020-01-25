import React, { Component } from "react";

import Config from "../../Config";
import Context from "../../Context";

export default class RuleChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [],
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
      const response = await fetch(Config.getApi("/rules"), request);

      if (!response.ok) {
        throw new Error("Could not fetch tags");
      }

      const data = await response.json();
      this.setState({ rules: data, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const rulesChoices = this.state.rules.map(rule => (
      <option value={rule.id}>{rule.name}</option>
    ));

    return (
      <select name="rules" className="form-control" multiple>
        {rulesChoices}
      </select>
    );
  }
}
