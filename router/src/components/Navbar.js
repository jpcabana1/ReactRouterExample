import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {"|"}
      <Link to="/">Home </Link>
      {"|"}
      <Link to="/shop">Shop Now </Link>
      {"|"}
      <Link to="/about">About Us </Link>
      {"|"}
    </div>
  );
}
export default Navbar;
