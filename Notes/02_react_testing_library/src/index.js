import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/*
  -> sometimes we would want to execute the peace of functionality before a test is run or sometimes we would want to execute the peace of functionality after a test is ran
    -> and we can do that in react testing library through hooks
    -> 
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
