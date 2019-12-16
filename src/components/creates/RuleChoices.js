import React, { Component } from "react";

import Config from "../../Config";

export default class RuleChoices extends Component {
  constructor(props) {
    super();
    this.state = {
      rules: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(Config.getApi("/rules"));

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
