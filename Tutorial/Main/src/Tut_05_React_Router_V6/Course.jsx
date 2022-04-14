import React from "react";
import { Outlet, NavLink } from "react-router-dom";

/*
    -> "NavLink" give us to additional property from the "Link"
*/

const Course = () => {
  const courseList = ["React", "Angular", "Vue", "NodeJs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses card</h4>
      <p>More Test</p>
      <NavLink
        //   here we are using 'NavLink' because we can access style and we want to color the active like which is active right now
        style={({ isActive }) => {
          // here we get the 'isActive=true' if we are in this url
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/test`}>
        tests
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Course;
