/*
* What is JSX?
  -> JSX is a javascript Extension or javascript XML
*/
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));
/*
  -> <h1>Hello world another </h1> -> this part that we are writing in js is no html but it is called as "JSX expression" in react
  -> this html code is use for the user but in the background this code is rander as differently.
  -> EX: 
        ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));

        To:
        ReactDOM.render( React.createElement("h1", null, "Hello world"), document.getElementById("root")); 
  -> This is pure code of react 
*/

// -> this is the javascript method to do same thing
var h1 = document.createElement("h1");
h1.innerHTML = "Hellow world 2";
document.getElementById("root").appendChild(h1);
