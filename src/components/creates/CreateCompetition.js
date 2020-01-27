import React, { Component } from "react";
import Octicon, { Calendar } from "@primer/octicons-react";

import TagChoices from "./TagChoices";
import RuleChoices from "./RuleChoices";

export default class CreateCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      finishDate: ""
    };
  }

  handleChange(field, event) {
    const obj = {};
    obj[field] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="App-sub-section">
        <div className="container">
          <h1>Create a new competition</h1>

          <form>
            <fieldset className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                id="name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter title"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Description:</label>
              <textarea
                value={this.state.description}
                onChange={this.handleChange.bind(this, "description")}
                name="description"
                className="form-control"
                placeholder="Write a description for your story"
                rows="3"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Due date:</label>
              <DatePicker competition={this} />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-check-input"
                type="checkbox"
                name="isPublic"
              />
              <label className="form-check-label">Public Mode</label>
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-check-input"
                type="checkbox"
                name="commentsEnabled"
                defaultChecked
              />
              <label className="form-check-label">Comments enabled</label>
            </fieldset>
            <fieldset className="form-group">
              <label>Rules:</label>
              <RuleChoices userId={this.props.userId} binder={this} />
            </fieldset>
            <fieldset className="form-group">
              <label>Tags:</label>
              <TagChoices userId={this.props.userId} binder={this} />
            </fieldset>
            <fieldset className="form-group text-center">
              <input
                type="submit"
                value="Create competition"
                className="btn btn-primary"
              />
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

function DatePicker({ competition }) {
  const d = new Date();
  const min = `${d.getDate()}/${d.getMonth()}/${d.getUTCFullYear()}`;

  return (
    <div className="input-group date">
      <input
        value={competition.state.finishDate}
        onChange={competition.handleChange.bind(competition, "finishDate")}
        className="form-control"
        data-date-format="mm/dd/yyyy"
        type="date"
        min={min}
      />
      <span className="input-group-append">
        <span className="input-group-text">
          <Octicon icon={Calendar} />
        </span>
      </span>
    </div>
  );
}
