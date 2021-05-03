import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {"|"}
      <NavLink style={{ marginLeft: "5rem" }} to="/">
        Home{" "}
      </NavLink>
      {"|"}
      <NavLink style={{ marginLeft: "5rem" }} to="/shop">
        Shop Now{" "}
      </NavLink>
      {"|"}
      <NavLink style={{ marginLeft: "5rem" }} to="/about">
        About Us{" "}
      </NavLink>
      {"|"}
    </div>
  );
}
export default Navbar;
