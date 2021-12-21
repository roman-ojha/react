import React from "react";
import ReactDOM from "react-dom";

/*
* JSX Expression in React
  -> so, we are write code of HTML(JSX) in js with the help of react js but if we want to write javascript inside the JSX(like HTML) we can do that as well now.
  -> With the help of ' {} '
*/

const flname = "Roman";

ReactDOM.render(
  <>
    <h1>my name is {flname}</h1>
    <p>my lucky number is {2 + 4};</p>
    <p>my lucky number is {Math.random()};</p>
    {/* This is the way to use javascript expression in jSX */}
  </>,
  document.getElementById("root")
);

// !! NOTE: WE can only use Expression on ' {} ' , we can't use statements
