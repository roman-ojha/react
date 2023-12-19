import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/*
  -> so previously done approach might not be the best way to handle fetch api because of:
    -> Request Cost Money
    -> Requests Are Slow
    -> Our Tests Dependent on Something External
  -> so to solve that problem what we can do is we can rest react app which complete isolation and test the api in complete isolation, and any which in that you can mock that interaction
  -> rather then requesting to the api and getting data what we can do is we can completely omit the api and we can just make a mock request and get back some dummy data 
*/

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
