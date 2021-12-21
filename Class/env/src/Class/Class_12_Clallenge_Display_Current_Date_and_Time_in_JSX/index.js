/*
* JSX Challenge #2
    1) Create a react app from scratch
    2) Add one h1 element ex. Your Name
    3) Add one p element in it with Current Date
    4) Add one p element in it with Current Time
*/

import React from "react";
import ReactDOM from "react-dom";

let name = "Roman";
let today = new Date();
let todayDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>Hello, My name is {name}</h1>
    <p>{`Todays Date is: ${todayDate}`}</p>
    {/* here, Objects are not valid as a React child so we have to convert Date object into String*/}
    <p>{`Current Time is: ${currentTime}`}</p>

    <h1>Hello, My name is {name}</h1>
    <p>{`Todays Date is: ${today.getDay().toString()}/${today
      .getDate()
      .toString()}/${today.getFullYear().toString()}`}</p>
    {/* here, Objects are not valid as a React child so we have to convert Date object into String*/}
    <p>{`Current Time is: ${today.getHours().toString()}:${today
      .getMinutes()
      .toString()}:${today.getSeconds().toString()}`}</p>
  </>,
  document.getElementById("root")
);
