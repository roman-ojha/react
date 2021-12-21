import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <NavLink
          className="nav_content"
          exact
          activeClassName="active_class"
          to="/"
          style={{ margin: "40px" }}
        >
          Home
        </NavLink>
        <NavLink
          className="nav_content"
          exact
          activeClassName="active_class"
          to="/about"
          style={{ margin: "40px" }}
        >
          AboutUs
        </NavLink>
        <NavLink
          className="nav_content"
          exact
          activeClassName="active_class"
          to="/search"
          style={{ margin: "40px" }}
        >
          Search
        </NavLink>
        <NavLink
          className="nav_content"
          exact
          activeClassName="active_class"
          to="/contact"
          style={{ margin: "40px" }}
        >
          contact
        </NavLink>
        <NavLink
          className="nav_content"
          exact
          activeClassName="active_class"
          to="/Service"
          style={{ margin: "40px" }}
        >
          Service
        </NavLink>
        <NavLink
          className="nav_content"
          exact
          activeClassName="active_class"
          to="/user/Roman"
          style={{ margin: "40px" }}
        >
          User
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
