import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

/*
        -> previously above react v16 on functional component you couldn't be able to work with hooks and functional component will get called as stateless component 
        -> but now from v16.7.0-alpha react introduce hooks
*/

/*
    1) Hooks are the new feature introduced in the React 16.8 version.
    2) it allows you to use state and other React features without writing a class. Hooks are the functions which 'hook into' react state and lifecycle feature from function components.
    3) priviously devloper use to use class but now most of them use Hooks
    4) but class is also the way to use state and other react features
    5) if does not work inside classes.
    6) Hooks should always be used at the top level of the react functions.
    7) for this Node version 6 and above. NPM version 5.2 or above

NOTE!! -> you can be able to learn class 
*/

ReactDOM.render(<App />, document.getElementById("root"));
