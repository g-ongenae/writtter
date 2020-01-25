import React, { Component } from "react";
import Octicon, { Search } from "@primer/octicons-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Config from "../Config";

export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <SearchBar />
          <SearchResults />
        </Router>
      </div>
    );
  }
}

function SearchBar() {
  return (
    <div className="container">
      <h1> Search Page </h1>
      <form className="form-row">
        <div className="col-sm-2"></div>
        <fieldset className="col-sm-7 form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <Octicon icon={Search} />
              </div>
            </div>
            <input
              id="search"
              type="search"
              name="search"
              className="form-control"
              required
            />
          </div>
        </fieldset>
        <fieldset className="col-sm-2 form-group">
          <input type="submit" value="Search" className="btn btn-primary" />
        </fieldset>
      </form>
    </div>
  );
}

function SearchResults({ results }) {
  // waiting for search to be made
  if (!results) {
    return <Centered text="Make a search" />;
  }

  // or a funny drawing (not found 404)
  if (Array.isEmpty(results)) {
    return <Centered text="No search results found" />;
  }

  // Search results
  const items = results.map((item, index) => (
    <SearchResultItem index={index} item={item} />
  ));
  return <div className="container">{items}</div>;
}

function SearchResultItem({ item, index }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {item.name} — by {item.ownerId} — {item.lastEditedAt}
      </div>
      <div className="panel-body">{item.description}</div>
      <div className="panel-footer">
        <Link to={Config.getUrl(`/story/${item.id}`)}>Read the story</Link>
        <Link to={Config.getUrl(`/story/${item.id}/edit`)}>Edit the story</Link>
      </div>
    </div>
  );
}

function Centered({ text }) {
  return (
    <div className="jumbotron d-flex align-items-center">
      <div className="container text-center">
        <h2>{text}</h2>
      </div>
    </div>
  );
}
