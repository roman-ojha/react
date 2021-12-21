import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink
        exact
        activeClassName="active_class"
        to="/"
        style={{ margin: "40px" }}
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/about"
        style={{ margin: "40px" }}
      >
        AboutUs
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/contact"
        style={{ margin: "40px" }}
      >
        contact
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/Service"
        style={{ margin: "40px" }}
      >
        Service
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/user/Roman"
        style={{ margin: "40px" }}
      >
        User
      </NavLink>
    </>
  );
};

export default Navbar;
