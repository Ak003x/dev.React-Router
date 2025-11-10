import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Akash</h1>
      <ul>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
