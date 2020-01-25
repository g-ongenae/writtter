import React, { Component } from "react";

import Stories from "./lists/Stories";

export default class HomePage extends Component {
  constructor(params) {
    super(params);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <section className="App-section">
        <Stories></Stories>
      </section>
    );
  }
}
