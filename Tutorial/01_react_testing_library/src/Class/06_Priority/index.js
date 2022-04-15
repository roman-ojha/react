import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/*
  -> in react testing library it should follow/mimic same as the real client site application because of that the we that we prioritize the query function is shown in '';
      1) getByRole
          -> get element by role, ex: button, heading;
      2) getByLabelText
          -> get by label text for form
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
