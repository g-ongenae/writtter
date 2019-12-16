import React from "react";
import { Link } from "react-router-dom";

import Config from "../Config";

export default function Menu({ loggedIn }) {
  let loginButtons;
  if (!loggedIn) {
    loginButtons = (
      <div>
        <Link to={Config.getUrl("/login")}> Log in </Link>
        <Link to={Config.getUrl("/register")}> Register </Link>
      </div>
    );
  } else {
    loginButtons = (
      <div>
        <Link to={Config.getUrl("/profile")}> Profile </Link>
        <Link to={Config.getUrl("/logout")}> Log out </Link>
      </div>
    );
  }

  return (
    <menu>
      <Link to={Config.getUrl("/")}> Writtter </Link>
      <Link to={Config.getUrl("/about")}> About </Link>
      <Link to={Config.getUrl("/search")}> Search </Link>
      <Link to={Config.getUrl("/create")}> Create </Link>
      {loginButtons}
    </menu>
  );
}
