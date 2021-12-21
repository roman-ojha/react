import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* here because of anchor tag if we will use it page will automatically going to refresh so we will not going to use anchor tag */}
      {/* <a href="/">Home</a>
      <a href="/about">AboutUs</a>
      <a href="/contact">contact</a> */}
      {/* instade we will use Link element from 'react-router-dom'*/}

      {/* instade of 'href' we use 'to' in Link element */}
      {/* <Link to="/" style={{ margin: "40px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "40px" }}>
        AboutUs
      </Link>
      <Link to="/contact" style={{ margin: "40px" }}>
        contact
      </Link> */}
      {/* but also now we have another element 'NavLink' */}
      <NavLink
        exact
        activeClassName="active_class"
        to="/"
        style={{ margin: "40px" }}
      >
        {/* Now using 'activeClassName' i can use css that which class is active  */}
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
    </>
  );
};

export default Navbar;
