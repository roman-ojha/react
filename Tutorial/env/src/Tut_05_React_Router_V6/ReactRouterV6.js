/*
  -> https://reactrouter.com/
  -> npm i react-router-dom
*/

import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Learn from "./Learn";
import Course from "./Course";
import Bundles from "./Bundles";
import CourseID from "./CourseID";
import Dashboard from "./Dashboard";

const ReactRouterV6 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* we are loading this component in this '/' path */}
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        {/* here we want to make when anybody hit's this route which is '/myapps' we don't want it to visit my apps we want to visit '/learn'*/}
        {/* The default functionality of <Navigate/> is actually to lay up what ever the route you're asking up at the very top if we want to replace that beheviour then we have to wirte 'replace'*/}
        <Route path="/learn" element={<Learn />}>
          {/* now here we are again routing the component which need to be load at url '/learn/...' */}
          <Route path="courses" element={<Course />}>
            {/* Here we are making a nested route and we don't have to define path as '/' */}
            <Route path=":courseid" element={<CourseID />} />
            {/* now here whenever user go to '/learn/courses/1' we want to grab that '1' value so we will get that through 'courseid' parameter*/}
            {/* NOTE: here we are loading the '<CourseID/> Component inside the '<Course/>' component so, we have to put <Outlet/> on that 'Courses' component*/}
            {/* NOTE: if we don't want to load the component inside the another component then we don't make the nested route we will put that route as the main route */}
          </Route>
          <Route path="bundles" element={<Bundles />} />
          {/* so here this we don't want to load the different page while going to these url we want to load these components inside this '/learn' component for that we need another component need to import from 'react-router-dom' which is 'Outlet' */}
        </Route>
        <Route path="crs/:courseid" element={<CourseID />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterV6;
