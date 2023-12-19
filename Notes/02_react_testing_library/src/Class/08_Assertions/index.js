import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/*
  -> now the second component that we are going to test is todo footer which will display how much amount of task had been left, and show the 'followers' button which is implementing react-router-dom
  -> first we will create the folder and file under './components/TodoFooter/__test__' 
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
