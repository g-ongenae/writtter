import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ loggedIn }) {
  let loginButtons;
  if (!loggedIn) {
    loginButtons = (
      <div>
        <Link to="/login"> Log in </Link>
        <Link to="/register"> Register </Link>
      </div>
    );
  } else {
    loginButtons = (
      <div>
        <Link to="/profile"> Profile </Link>
        <Link to="/logout"> Log out </Link>
      </div>
    );
  }

  return (
    <menu>
      <Link to="/"> Writtter </Link>
      <Link to="/about"> About </Link>
      <Link to="/search"> Search </Link>
      <Link to="/create"> Create </Link>
      {loginButtons}
    </menu>
  );
}
