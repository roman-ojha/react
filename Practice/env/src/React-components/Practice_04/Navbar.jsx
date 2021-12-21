import React from "react";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <NavLink
          exact
          to="/Home"
          activeClassName="navLink"
          className="navLinkClass"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeClassName="navLink"
          className="navLinkClass"
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/contact"
          activeClassName="navLink"
          className="navLinkClass"
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
