import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
}

export default Menu;
