import React from "react";
import ReactDOM from "react-dom";

/*
* JSX Challenge
    1) Create a react app from scratch
    2) Add one h1 element in it
    3) Add one p element in it
    4) Add list of fav 5 Netflix series in it using an order list.
*/

ReactDOM.render(
  <>
    <h1> Roman Ojha Netflix Pick </h1>
    <p> List of 5 Best Series. </p>
    <ol>
      <li> Dark </li>
      <li> Extra Curricular </li>
      <li> My Holo Love </li>
      <li> My first-2 love </li>
      <li> Mr Robot </li>
    </ol>
  </>,
  document.getElementById("root")
);
