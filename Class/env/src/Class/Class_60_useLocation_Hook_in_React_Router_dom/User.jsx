import React from "react";
import { useParams, useLocation } from "react-router-dom";

// const User1 = ({ match }) => {
//   return (
//     <>
//       <h1>User {match.params.name} page</h1>
//     </>
//   );
// };

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  // here useLocation() return an object of the current location(URL) that user is right now
  console.log(location);
  return (
    <>
      <h1>
        User {fname} {lname} page
      </h1>
      <p>My current Location is {location.pathname}</p>
      {/* Here we are making a condition that if user will type the exact url only at that time some action has to perform */}
      {location.pathname === `/user/roman/ojha` ? (
        <button
          onClick={() => {
            alert("You are awsome");
          }}
        >
          Click Me
        </button>
      ) : null}
    </>
  );
};

export default User;
