import React, { Component } from "react";

const API_BASE_URL = "https://writtter.herokuapp.com";

export default class RuleChoices extends Component {
  constructor() {
    super();

    this.state = {
      rules: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(`${API_BASE_URL}/rules`);

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
