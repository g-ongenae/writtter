import React from "react";
import { Link } from "react-router-dom";

import Config from "../Config";

export default function Menu({ loggedIn }) {
  const logButtons = [];
  // TODO simplify
  if (!loggedIn) {
    logButtons.push(<li className="nav-item">
      <Link className="nav-link" to={Config.getUrl("/login")}> Log in </Link>
    </li>);
    logButtons.push(<li className="nav-item">
      <Link className="nav-link" to={Config.getUrl("/register")}> Register </Link>
    </li>);
  } else {
    logButtons.push(<li className="nav-item">
      <Link className="nav-link" to={Config.getUrl("/profile")}> Profile </Link>
    </li>);
    logButtons.push(<li className="nav-item">
      <Link className="nav-link" to={Config.getUrl("/logout")}> Log out </Link>
    </li>);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to={Config.getUrl("/")}> Writtter </Link>
      {/* TODO fix me 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse show" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to={Config.getUrl("/about")}> About </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={Config.getUrl("/search")}> Search </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={Config.getUrl("/create")}> Create </Link>
          </li>
          {logButtons[0]}
          {logButtons[1]}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
