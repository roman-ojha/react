import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
 *) React Portals:
    -> React Portals provide a way to render children into a dom node that exist outside of the dom hierarchy of the parent component
    -> as of previous we use to render all of the reaction interface inside one dom div element with id 'root'
    -> what react portal provide is the ability to break our of this dom tree
    -> so you can render the component onto a dom node that is not under this root element
    *) Steps to use portal:
        -> create dom node that falls outside the root element in public/index.html 
            ->  <div id="root"></div>
                <div id="portal-root"></div>
        -> now we will create portal from './components/PortalDemo.tsx' component
    -> Even though a portal can be anywhere in the Dom tree it behaves like a normal react child, this includes event bubbling so an event fired from inside a portal will propagate to ancestors in the containing react tree even if those element are not ancestors in the dom tree
        -> Ex: https://codepen.io/gaearon/pen/jGBWpE 

    *) Some Use Cases:
        -> If Child component is a Modal, Popup, tooltip
        -> EX: https://codesandbox.io/s/00254q4n6p
 */

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
