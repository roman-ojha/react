import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/*
-> Now we will going to test integration test, means how tow different component interact with each other
  -> EX: when we will type some value in input field and click the Add button that we should see that same value into added todo's list
-> It means that we will going to test 'Todo' component which will include 'AddInput' and 'TodoList' component
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
