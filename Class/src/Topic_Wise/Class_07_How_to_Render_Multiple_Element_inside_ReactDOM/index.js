import React from "react";
import ReactDOM from "react-dom";

// render method need only one element
// so to make the who jsx element as one element we can put all jsx element into one div jsx element
ReactDOM.render(
  <div>
    {/* now this will called as the one element and compiler will not throw an error*/}
    <h1>Hello world fds</h1>
    <p>another hello world</p>
  </div>,
  document.getElementById("root")
);

// but now from react v16 can be able to write jsx element without using div element by:
// to return an array of element.
ReactDOM.render(
  [<h1>hello world</h1>, <p>another hello world</p>],
  // this is like array form
  document.getElementById("root")
);
