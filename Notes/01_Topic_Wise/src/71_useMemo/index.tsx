import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
 *) useMemo:
    -> it work same as 'pure component' in class component
    -> sometimes without requirement component get render without or our need
    -> like if there is the state and props of the component that are not being changed but also that component is being render
    -> to restrict that behavior use using 'memo'
 */

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
