import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// useParams hooks we automatically look into the routes and in 'ReactRouterV6' we have mentioned the parameter ':courseid' so we can access that

const CourseID = () => {
  const { courseid } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>URL Params is: {courseid}</h1>
      {/* here we want to click on the price and want to go the another page to see the price and also want to carry some information with us */}
      {/* so we want carry information to the another page or component which 'Dashboard' */}
      {/* we can carry the information with 'useNavigate()' and 'Link' as well */}
      <button
        onClick={() => {
          //   navigate(-1);
          //   here we can use navigate(-1) to go one page back as well
          navigate("/dashboard", { state: courseid });
          //   in navigate we can pass the parameter as well
          //   NOTE: whatever we will pass it will convert it into the string
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={"Django"}>
        {/* here we are passing the 'Django' information with us */}
        Text link
      </Link>
    </div>
  );
};

export default CourseID;
