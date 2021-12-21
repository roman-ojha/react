import React from "react";
import ReactDOM from "react-dom";

const fname = "Roman";
const lname = "Ojha";

ReactDOM.render(
  <>
    <h1>
      my name is {fname} {lname}
    </h1>
    {/* This is also the way to do */}

    <h1>my name is {fname + " " + lname}</h1>
    {/* This is also the way to do */}

    {/* but now by using template literals */}
    <h1> {`my name is ${fname} ${lname}`}</h1>
  </>,
  document.getElementById("root")
);
