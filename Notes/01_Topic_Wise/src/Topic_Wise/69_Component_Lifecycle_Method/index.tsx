import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
  *) Life cycle method:
      -> The three stage that happen in react component:
        1) Mounting
            -> first time component get render
        2) Updating
            -> when component get updated with something like:
              1) props get changed
              2) updated state variable
        3) UnMounting
            -> when component get out of the page
      -> in case of class component there are lot of method available for lifecycle method
      -> but in case of functional component there is only one method called 'useEffect' hooks which will fullfil the talk 
 */

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
