import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/*
  -> now we are going to test 'heading' component and the text is being pass by the 'props' through the parent component
    -> so when we are in '/' page parent will pass 'TODO' props and when we will click follower and go to '/followers' then parent will page "Followers" text
    -> so we are going to test this functionality
    -> we are testing './components/Header/Header.js' component
    -> to test, the typical convention is to go to the directory where that component lies and create folder called '__test__' and under create the 'Headers.test.js' file
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
