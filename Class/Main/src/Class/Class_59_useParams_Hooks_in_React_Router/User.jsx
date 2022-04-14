import React from "react";
import { useParams } from "react-router-dom";

const User1 = ({ match }) => {
  return (
    <>
      {/* With out hooks we use to do this before */}
      <h1>User {match.params.name} page</h1>
      {/* but now we will use 'useParams' to imort it from 'react-router-dom' */}
    </>
  );
};

const User = () => {
  // now here by using 'useParams' we don't even have to pass the argument and don't even have to call like previously
  // name is comming from
  // <Route path="/user/:name" component={User} />
  const { fname, lname } = useParams();
  return (
    <>
      <h1>
        User {fname} {lname} page
      </h1>
    </>
  );
};

export default User;
