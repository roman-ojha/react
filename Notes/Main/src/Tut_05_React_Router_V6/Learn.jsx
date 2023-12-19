import React from "react";
import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        courses
      </Link>
      <Link className="btn btn-primary" to="/learn/bundles">
        bundle
      </Link>
      <Outlet />
      {/* now here we inside the 'Outlet' component which we will to go '/learn/courses' we will see the 'courses' component and which we will go to '/learn/bundles' we will see 'bundle' component */}
    </div>
  );
};

export default Learn;
