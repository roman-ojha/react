// var React = require("react");
import React from "react";
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
// these two module are important to start code in reactjs

// it takes three parameters
// ReactDOM.render("What to show", "Where to show", "callback function");

ReactDOM.render(<h1>Hello world another </h1>, document.getElementById("root"));

/*
* What is Bable
  -> Babel is a javaScript compiler.to convert react code into modern javascript code to understanding for the browser
  so, now we don't have to use :
    var React = require("react");
    var ReactDOM = require("react-dom");

  now, we can do this:
    import React from react;
    import React from react-dom
  -> we don't have to install Bable because while we are importing React it will automatically install
*/
