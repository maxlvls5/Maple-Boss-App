import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        <button> Home </button>
      </NavLink>
      <NavLink to="/guides">
        <button> Guides </button>
      </NavLink>
      <NavLink to="/me">
        <button> Gamer Profile </button>
      </NavLink>
      <NavLink to="/logout">
        <button> Log Out </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
