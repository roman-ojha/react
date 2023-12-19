/*
* React Challenge #3
      1) Create a react app from scratch
      2) Show a heading that says Hello Sir, Good Morning, if time is between 1 to 11am
      3) Good Afternoon, if 12PM to 7PM
      4) Good Night, if 7PM till Mightnight
      5) Apply Css in it, then dynamically change the color of Greeting parts only using Inline CSS style. Ex. Green, Orange, Black etc...
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let Time = new Date().getHours();
Time = Number(Time);
let updateMessage;
let updateColor = {};

if (Time >= 1 && Time <= 11) {
  updateMessage = "Good Morning";
  updateColor.color = "Green";
} else if (Time >= 12 && Time <= 19) {
  updateMessage = "Good Afternoon";
  updateColor.color = "Orange";
} else {
  updateMessage = "Good Night";
  updateColor.color = "Black";
}

ReactDOM.render(
  <>
    <div id="container">
      <h1 id="message">Hello sir, </h1>
      <h1 id="messageUpdate" style={updateColor}>
        {" "}
        &nbsp;{updateMessage}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
