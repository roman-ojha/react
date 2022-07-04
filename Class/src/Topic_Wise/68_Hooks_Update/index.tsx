import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
    *) Hooks update:
        -> this contradicts what we've learnt about functional versus state components
        -> previously above react v16 on functional component you couldn't be able to work with hooks and functional component will get called as stateless component 
        -> but now from v16.7.0-alpha react introduce hooks
*/

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
