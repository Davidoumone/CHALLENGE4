import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>

      <Link to="/react">React</Link>

      <Link to="/node">Node</Link>

      <Link to="/contact">Administrator</Link>
    </div>
  );
};

export default Navbar;
