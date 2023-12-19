import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

/*
Following are the steps to pass data from child component to parent component:

-> In the parent component, create a callback function. This callback function will retrieve the data from the child component.
-> Pass the callback function to the child as a props from the parent component.
-> The child component calls the parent callback function using props and passes the data to the parent component.

*/

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
