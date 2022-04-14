import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Info that i got here is:{location.state} </h1>
      {/* here we can get the value that we have pass into the 'navigate()' function */}
    </div>
  );
};

export default Dashboard;
