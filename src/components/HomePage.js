import React, { Component } from "react";

import Stories from "./lists/Stories";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
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
