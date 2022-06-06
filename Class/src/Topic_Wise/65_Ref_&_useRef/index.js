import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

/*
  => In react js we have controlled form and un controlled form:
    => Controlled Form:
      -> <label>
          Name:
            <input
              type = "text"
              value={this.state.value}
              onChange={this.handlechange}
            />
          </label>
    => Uncontrolled Form:
      -> <label>
          Name:
            <input type = "text"/>
          </label>
*/
/*
  => the core ingredient of this 'useref' hooks is to store the refrence of and element now the value for the value we use 'useState' hooks
  => we have to understand that 'useState' hooks is responsible for rerendring that porticuler DOM element but in the case of 'useRef' hook, any of the DOM element never get rerender
  => Keep in mid that useRef doesn't notify you when its content changes. Mutaiting the '.current' property doesn't couse a re-render
  => useRef return a mutable ref object whose '.current' property is intialized to the argument(initalValue). the returned object will prersiis for the full life time of the component.
*/
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
