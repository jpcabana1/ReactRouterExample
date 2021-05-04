import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
shop;
function Navbar() {
  return (
    <div className="navbar">
      {"|"}
      <NavLink to="/">Home </NavLink>
      {"|"}
      <NavLink to="/">Shop Now </NavLink>
      {"|"}
      <NavLink to="/about">About Us </NavLink>
      {"|"}
    </div>
  );
}
export default Navbar;
