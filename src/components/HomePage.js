import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(params) {
    super(params);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="App-section">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Writtter</h1>
        <h4>The place to play with words and stories, together.</h4>
        <p>Coming Soon</p>
      </section>
    );
  }
};