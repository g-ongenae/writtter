import React, { Component } from "react";
import Octicon, { Search } from "@primer/octicons-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
    <div class="container">
      <h1> Search Page </h1>
      <form class="form-row">
        <div class="col-sm-2"></div>
        <fieldset class="col-sm-7 form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <Octicon icon={Search} />
              </div>
            </div>
            <input
              id="search"
              type="search"
              name="search"
              class="form-control"
              required
            />
          </div>
        </fieldset>
        <fieldset class="col-sm-2 form-group">
          <input type="submit" value="Search" class="btn btn-primary" />
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
  return <div class="container">{items}</div>;
}

function SearchResultItem({ item, index }) {
  return (
    <div class="panel panel-default">
      <div class="panel-heading">
        {item.name} — by {item.ownerId} — {item.lastEditedAt}
      </div>
      <div class="panel-body">{item.description}</div>
      <div class="panel-footer">
        <Link to={`/stories/${item.id}`}>Read the story</Link>
        <Link to={`/stories/${item.id}/edit`}>Edit the story</Link>
      </div>
    </div>
  );
}

function Centered({ text }) {
  return (
    <div class="jumbotron d-flex align-items-center">
      <div class="container text-center">
        <h2>{text}</h2>
      </div>
    </div>
  );
}
